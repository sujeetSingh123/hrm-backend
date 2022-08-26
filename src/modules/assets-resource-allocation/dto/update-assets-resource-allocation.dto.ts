import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetsResourceAllocationDto } from './create-assets-resource-allocation.dto';

export class UpdateAssetsResourceAllocationDto extends PartialType(
    CreateAssetsResourceAllocationDto
) {}
