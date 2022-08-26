import { PartialType } from '@nestjs/mapped-types';
import { CreateUsersLeaveReportDto } from './create-users-leave-report.dto';

export class UpdateUsersLeaveReportDto extends PartialType(
    CreateUsersLeaveReportDto
) {}
