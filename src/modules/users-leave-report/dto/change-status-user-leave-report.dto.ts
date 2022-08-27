import { Type } from 'class-transformer';
import { IsNotEmpty, IsEnum, IsMongoId } from 'class-validator';
import {
    LEAVE_HALF_FULL,
    LEAVE_REPORT_STATUS,
} from '../user-leave-report.interface';

export class ChangeUserLeaveStatusDto {
    @IsMongoId()
    @IsNotEmpty()
    @Type(() => String)
    readonly id: string;

    @IsNotEmpty()
    @IsEnum(LEAVE_REPORT_STATUS)
    readonly status: LEAVE_REPORT_STATUS;
}
