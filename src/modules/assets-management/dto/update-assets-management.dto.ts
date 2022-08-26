import { PartialType } from '@nestjs/mapped-types';
import { CreateAssetsManagementDto } from './create-assets-management.dto';

export class UpdateAssetsManagementDto extends PartialType(
    CreateAssetsManagementDto
) {}
