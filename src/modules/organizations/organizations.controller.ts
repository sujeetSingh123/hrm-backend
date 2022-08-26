import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { CreateOrganizationDto } from './dto/create-organization.dto';
import { UpdateOrganizationDto } from './dto/update-organization.dto';
import {
    AuthAdminJwtGuard,
    AuthJwtGuard,
} from 'src/common/auth/decorators/auth.jwt.decorator';
import { ENUM_AUTH_PERMISSIONS } from 'src/common/auth/constants/auth.enum.permission.constant';
import { Response } from 'src/common/response/decorators/response.decorator';
import { GetUser } from '../user/decorators/user.decorator';
import { IUserDocument } from '../user/user.interface';
import { CreateCalendarsDto } from './dto/create-calenders.dto';
import { CreateLeaveDaysCountDto } from './dto/create-leave-days-count.dto';

@Controller('organizations')
export class OrganizationsController {
    constructor(private readonly organizationsService: OrganizationsService) {}

    @Post()
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ORGANIZATION_CRUD)
    @Response('organizations.create')
    create(
        @GetUser() user: IUserDocument,
        @Body() createOrganizationDto: CreateOrganizationDto
    ) {
        return this.organizationsService.create(user, createOrganizationDto);
    }

    @Put()
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ORGANIZATION_CRUD)
    @Response('organizations.update')
    updateCurrentUserOrganization(
        @GetUser() user: IUserDocument,
        @Body() updateOrganizationDto: UpdateOrganizationDto
    ) {
        return this.organizationsService.update(user, updateOrganizationDto);
    }

    @Get('/current-user')
    @AuthJwtGuard()
    @Response('organizations.detailsFromCurrentUser')
    getCurrentUserOrganizationDetails(@GetUser() user: IUserDocument) {
        return this.organizationsService.getCurrentUserOrganizations(user);
    }

    @Post('/calendar-events')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ORGANIZATION_CRUD)
    @Response('organizations.createCalendarEvents')
    createCalendarEvents(
        @GetUser() user: IUserDocument,
        calendarEventsDto: CreateCalendarsDto
    ) {
        return this.organizationsService.createCalenderEvents(
            user,
            calendarEventsDto
        );
    }

    @Post('/leave-counts')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ORGANIZATION_CRUD)
    @Response('organizations.createLeaveCountWithType')
    createLeaveCountWithType(
        @GetUser() user: IUserDocument,
        leaveCountLeave: CreateLeaveDaysCountDto
    ) {
        return this.organizationsService.createLeaveCountWithType(
            user,
            leaveCountLeave
        );
    }

    @Delete('/calendar-events/:eventId')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ORGANIZATION_CRUD)
    @Response('organizations.deleteCalendarEvent')
    deleteCalendarEventById(
        @GetUser() user: IUserDocument,
        @Param('eventId') eventId: string
    ) {
        return this.organizationsService.deleteCalendarEventsById(
            user,
            eventId
        );
    }

    @Delete('/leave-counts/:leaveCountId')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ORGANIZATION_CRUD)
    @Response('organizations.deleteLeaveCountType')
    deleteLeaveCountWithTypeById(
        @GetUser() user: IUserDocument,
        @Param('leaveCountId') leaveCountId: string
    ) {
        return this.organizationsService.deleteLeaveCountWithTypeById(
            user,
            leaveCountId
        );
    }
}
