import { PartialType } from '@nestjs/mapped-types';
import { CreateUserDynamicFieldDto } from './create-user-dynamic-field.dto';

export class UpdateUserDynamicFieldDto extends PartialType(
    CreateUserDynamicFieldDto
) {}
