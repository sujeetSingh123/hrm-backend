import { Type } from 'class-transformer';
import {
    IsString,
    IsNotEmpty,
    MaxLength,
    MinLength,
    IsNumber,
    IsOptional,
    IsArray,
    IsEnum,
    IsMongoId,
} from 'class-validator';
import { LEAVE_HALF_FULL } from '../user-leave-report.interface';

export class CreateUsersLeaveReportDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(500)
    @Type(() => String)
    readonly descriptions: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    @Type(() => String)
    readonly leaveFrom: string;

    @IsNotEmpty()
    @IsNumber()
    readonly leaveDays: number;

    @IsString()
    @IsOptional()
    @Type(() => String)
    readonly leaveTO: string;

    @IsMongoId()
    @IsNotEmpty()
    @Type(() => String)
    readonly leaveType: string;

    @IsNotEmpty()
    @IsEnum(LEAVE_HALF_FULL)
    readonly halfOrFull: LEAVE_HALF_FULL;

    @IsNotEmpty()
    @IsArray()
    readonly requestedUserId: string[];
}
