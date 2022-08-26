import { Injectable } from '@nestjs/common';
import { CreateUsersLeaveReportDto } from './dto/create-users-leave-report.dto';
import { UpdateUsersLeaveReportDto } from './dto/update-users-leave-report.dto';

@Injectable()
export class UsersLeaveReportService {
    create(createUsersLeaveReportDto: CreateUsersLeaveReportDto) {
        return 'This action adds a new usersLeaveReport';
    }

    findAll() {
        return `This action returns all usersLeaveReport`;
    }

    findOne(id: number) {
        return `This action returns a #${id} usersLeaveReport`;
    }

    update(id: number, updateUsersLeaveReportDto: UpdateUsersLeaveReportDto) {
        return `This action updates a #${id} usersLeaveReport`;
    }

    remove(id: number) {
        return `This action removes a #${id} usersLeaveReport`;
    }
}
