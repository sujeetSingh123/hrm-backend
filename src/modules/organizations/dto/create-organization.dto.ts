import { IsNotEmpty, MaxLength, IsString } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateOrganizationDto {
    @IsNotEmpty()
    @MaxLength(100)
    @Type(() => String)
    readonly name: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(30)
    @Type(() => String)
    readonly website: string;

    @IsString()
    @IsNotEmpty()
    @MaxLength(200)
    @Type(() => String)
    readonly descriptions: string;
}
