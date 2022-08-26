import { Injectable } from '@nestjs/common';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import {
    OrganizationsEntity,
    OrganizationDocument,
} from './schema/organizations.schema';
import { Model } from 'mongoose';
import { IUserDocument } from '../user/user.interface';
import { CreateCalendarsDto } from './dto/create-calenders.dto';
import { CreateLeaveDaysCountDto } from './dto/create-leave-days-count.dto';
import { UserService } from '../user/services/user.service';

@Injectable()
export class OrganizationsService {
    constructor(
        @DatabaseEntity(OrganizationsEntity.name)
        private readonly organizationModal: Model<OrganizationDocument>,

        private userService: UserService
    ) {}
    async create(
        user: IUserDocument,
        createOrganizationDto: CreateOrganizationDto
    ) {
        const newOrganizations = new this.organizationModal({
            ...createOrganizationDto,
        });

        await newOrganizations.save();

        await this.userService.addOrganizationInUser(
            user,
            newOrganizations._id
        );
        return newOrganizations;
    }

    async update(
        user: IUserDocument,
        updateOrganizationDto: UpdateOrganizationDto
    ) {
        // const organization = this.organizationModal.findById(user.organizations);
        return await this.organizationModal.findByIdAndUpdate(
            user.organizations,
            { $set: updateOrganizationDto },
            { new: true }
        );
    }

    async getCurrentUserOrganizations(user: IUserDocument) {
        const organizations = await this.organizationModal
            .findById(user.organizations)
            .lean();
        return organizations;
    }

    async createCalenderEvents(
        user: IUserDocument,
        calendarsDto: CreateCalendarsDto
    ) {
        const organizations = await this.organizationModal.findById(
            user.organizations
        );
        organizations['calenders'] = calendarsDto.calendars;
        return await organizations.save();
    }

    async deleteCalendarEventsById(user: IUserDocument, calenderId: string) {
        const organizations = await this.organizationModal.findById(
            user.organizations
        );

        const calenders = organizations.calenders.filter(
            (item) => item._id.toString() !== calenderId
        );
        organizations['calenders'] = calenders;
        return await organizations.save();
    }

    async deleteLeaveCountWithTypeById(
        user: IUserDocument,
        leaveCountId: string
    ) {
        const organizations = await this.organizationModal.findById(
            user.organizations
        );
        const leaveCountWithDays = organizations.leaveCountWithDays.filter(
            (item) => item._id.toString() !== leaveCountId
        );
        organizations['leaveCountWithDays'] = leaveCountWithDays;
        return await organizations.save();
    }

    async createLeaveCountWithType(
        user: IUserDocument,
        leaveCountDto: CreateLeaveDaysCountDto
    ) {
        const organizations = await this.organizationModal.findById(
            user.organizations
        );
        organizations['leaveCountWithDays'] = leaveCountDto.leaveCountWithDays;
        return await organizations.save();
    }
}
