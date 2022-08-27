import { Injectable } from '@nestjs/common';
import { CreateUsersLeaveReportDto } from './dto/create-users-leave-report.dto';
import { UpdateUsersLeaveReportDto } from './dto/update-users-leave-report.dto';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import {
    UserLeaveReportEntity,
    UserLeaveReportDocument,
} from './schema/user-leave-report.schema';
import { Model, Types } from 'mongoose';
import { IUserDocument } from '../user/user.interface';
import { LEAVE_REPORT_STATUS } from './user-leave-report.interface';
import { Type } from 'class-transformer';

@Injectable()
export class UsersLeaveReportService {
    constructor(
        @DatabaseEntity(UserLeaveReportEntity.name)
        private readonly userLeaveReportModal: Model<UserLeaveReportDocument>
    ) {}
    async create(
        user: IUserDocument,
        createUsersLeaveReportDto: CreateUsersLeaveReportDto
    ) {
        const createRequest = new this.userLeaveReportModal({
            ...createUsersLeaveReportDto,
            user: new Types.ObjectId(user._id),
        });
        return await createRequest.save();
    }

    async findAllLeaveOfCurrentOrganizations(user: IUserDocument) {
        const allUserLeaveOfCurrentOrganizations =
            await this.userLeaveReportModal
                .find({})
                .populate({
                    path: 'user',
                    match: {
                        organizations: new Types.ObjectId(user.organizations),
                    },
                })
                .lean();

        return allUserLeaveOfCurrentOrganizations;
    }

    async getCurrentUserLeaveToApprove(user: IUserDocument) {
        const userLeaveToApprove = await this.userLeaveReportModal
            .find({
                status: LEAVE_REPORT_STATUS.PENDING,
                requestLeaveTo: {
                    $elemMatch: {
                        id: new Types.ObjectId(user._id),
                    },
                },
            })
            .lean();
        return userLeaveToApprove;
    }

    async findOne(id: string) {
        const oneReportOfUser = await this.userLeaveReportModal.findById(id);
        return oneReportOfUser;
    }

    async getCurrentUserLeaves(user: IUserDocument) {
        const userLeave = await this.userLeaveReportModal.find({
            user: new Types.ObjectId(user._id),
        });

        return userLeave;
    }

    async changeStatusOfLeaveById(id: string, status: LEAVE_REPORT_STATUS) {
        const leaveReport = await this.userLeaveReportModal.findById(id);
        leaveReport['status'] = status;

        return leaveReport.save();
    }

    async update(
        id: string,
        updateUsersLeaveReportDto: UpdateUsersLeaveReportDto
    ) {
        const leaveReport = await this.userLeaveReportModal.findById(id);

        return await this.userLeaveReportModal.findByIdAndUpdate(
            id,
            { $set: { ...leaveReport, ...updateUsersLeaveReportDto } },
            { new: true }
        );
    }

    remove(id: string) {
        return this.userLeaveReportModal.findByIdAndDelete(id);
    }
}
