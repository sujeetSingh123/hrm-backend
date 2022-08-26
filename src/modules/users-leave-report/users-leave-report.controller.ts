import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { UsersLeaveReportService } from './users-leave-report.service';
import { CreateUsersLeaveReportDto } from './dto/create-users-leave-report.dto';
import { UpdateUsersLeaveReportDto } from './dto/update-users-leave-report.dto';

@Controller('users-leave-report')
export class UsersLeaveReportController {
    constructor(
        private readonly usersLeaveReportService: UsersLeaveReportService
    ) {}

    @Post()
    create(@Body() createUsersLeaveReportDto: CreateUsersLeaveReportDto) {
        return this.usersLeaveReportService.create(createUsersLeaveReportDto);
    }

    @Get()
    findAll() {
        return this.usersLeaveReportService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.usersLeaveReportService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body() updateUsersLeaveReportDto: UpdateUsersLeaveReportDto
    ) {
        return this.usersLeaveReportService.update(
            +id,
            updateUsersLeaveReportDto
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.usersLeaveReportService.remove(+id);
    }
}
