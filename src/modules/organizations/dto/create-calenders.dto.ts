import {
    IsNotEmpty,
    MaxLength,
    IsString,
    IsArray,
    IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { ICalenderMarking } from '../organization.interface';

export class CreateCalendarsDto {
    @IsArray()
    @IsNotEmpty()
    @MaxLength(200)
    @Type(() => Array)
    readonly calendars: ICalenderMarking[];
}
