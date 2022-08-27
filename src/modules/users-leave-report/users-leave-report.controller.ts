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
import { UsersLeaveReportService } from './users-leave-report.service';
import { CreateUsersLeaveReportDto } from './dto/create-users-leave-report.dto';
import { UpdateUsersLeaveReportDto } from './dto/update-users-leave-report.dto';
import {
    AuthJwtGuard,
    AuthAdminJwtGuard,
} from 'src/common/auth/decorators/auth.jwt.decorator';
import { GetUser } from '../user/decorators/user.decorator';
import { Response } from 'src/common/response/decorators/response.decorator';
import { ChangeUserLeaveStatusDto } from './dto/change-status-user-leave-report.dto';

@Controller('users-leave-report')
export class UsersLeaveReportController {
    constructor(
        private readonly usersLeaveReportService: UsersLeaveReportService
    ) {}

    @Post()
    @AuthJwtGuard()
    @Response('userLeaveReport.create')
    create(
        @GetUser() user,
        @Body() createUsersLeaveReportDto: CreateUsersLeaveReportDto
    ) {
        return this.usersLeaveReportService.create(
            user,
            createUsersLeaveReportDto
        );
    }

    @Get(':id')
    @AuthJwtGuard()
    @Response('userLeaveReport.findOne')
    findOne(@Param('id') id: string) {
        return this.usersLeaveReportService.findOne(id);
    }

    @Get('/find-user-leaves-organizations')
    @AuthAdminJwtGuard()
    @Response('userLeaveReport.findAllLeaveOfCurrentOrganizations')
    findAllLeaveOfCurrentOrganizations(@GetUser() user) {
        return this.usersLeaveReportService.findAllLeaveOfCurrentOrganizations(
            user
        );
    }
    @Put(':id')
    @AuthJwtGuard()
    @Response('userLeaveReport.findOne')
    update(
        @Param('id') id: string,
        @Body() updateUsersLeaveReportDto: UpdateUsersLeaveReportDto
    ) {
        return this.usersLeaveReportService.update(
            id,
            updateUsersLeaveReportDto
        );
    }

    @Get('/current-user')
    @AuthJwtGuard()
    @Response('userLeaveReport.getCurrentUserLeaves')
    getCurrentUserLeaves(@GetUser() user) {
        return this.usersLeaveReportService.getCurrentUserLeaves(user);
    }

    @Post('/change-status')
    @AuthJwtGuard()
    @Response('userLeaveReport.changeStatusOfLeaveById')
    changeStatusOfLeaveById(
        @Body() changeUserLeaveStatusDto: ChangeUserLeaveStatusDto
    ) {
        return this.usersLeaveReportService.changeStatusOfLeaveById(
            changeUserLeaveStatusDto.id,
            changeUserLeaveStatusDto.status
        );
    }

    @Delete(':id')
    @AuthAdminJwtGuard()
    @Response('userLeaveReport.remove')
    remove(@Param('id') id: string) {
        return this.usersLeaveReportService.remove(id);
    }
}
