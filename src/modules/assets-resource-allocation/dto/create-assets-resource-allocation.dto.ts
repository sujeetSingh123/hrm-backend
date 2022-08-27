import { IsMongoId } from 'class-validator';
import { Type } from 'class-transformer';

export class CreateAssetsResourceAllocationDto {
    @IsMongoId()
    @Type(() => String)
    readonly asset: string;

    @IsMongoId()
    @Type(() => String)
    readonly user: string;

    @Type(() => String)
    acquiredDate: string;
}
