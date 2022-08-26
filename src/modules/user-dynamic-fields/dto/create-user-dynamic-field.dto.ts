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
} from 'class-validator';
import {
    IOptions,
    IValidations,
    FIELD_TYPES_ENUM,
} from '../user.dynamic-fields.interface';

export class CreateUserDynamicFieldDto {
    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(100)
    @Type(() => String)
    readonly label: string;

    @IsString()
    @IsNotEmpty()
    @MinLength(1)
    @MaxLength(30)
    @Type(() => String)
    readonly placeHolder: string;

    @IsNumber()
    @IsNotEmpty()
    @Type(() => Number)
    readonly order: number;

    @IsArray()
    @IsOptional()
    @Type(() => Array)
    readonly options: IOptions[];

    @IsOptional()
    readonly validations: IValidations;

    @IsNotEmpty()
    @IsEnum(FIELD_TYPES_ENUM)
    readonly type: FIELD_TYPES_ENUM;
}
