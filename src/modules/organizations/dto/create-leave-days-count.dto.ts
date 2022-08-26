import {
    IsNotEmpty,
    MaxLength,
    IsString,
    IsArray,
    IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import {
    ICalenderMarking,
    ILeaveTypeWithCount,
} from '../organization.interface';

export class CreateLeaveDaysCountDto {
    @IsArray()
    @IsNotEmpty()
    @MaxLength(200)
    @Type(() => Array)
    readonly leaveCountWithDays: ILeaveTypeWithCount[];
}
