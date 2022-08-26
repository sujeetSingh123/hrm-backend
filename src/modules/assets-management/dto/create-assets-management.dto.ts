import {
    IsNotEmpty,
    MaxLength,
    IsString,
    IsArray,
    IsOptional,
} from 'class-validator';
import { Type } from 'class-transformer';
import { IAssetsDetails } from '../assets-management.interface';

export class CreateAssetsManagementDto {
    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    @Type(() => String)
    readonly title: string;

    @IsArray()
    @IsOptional()
    @MaxLength(200)
    @Type(() => Array)
    readonly details: IAssetsDetails[];
}
