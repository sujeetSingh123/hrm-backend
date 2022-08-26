import { IsString, IsNotEmpty, IsArray } from 'class-validator';
import { IsPasswordStrong } from 'src/common/request/validations/request.is-password-strong.validation';
import { IUserDynamicFieldFormValues } from '../user.interface';

export class UserUpdateDynamicFieldsDto {
    @IsArray()
    @IsNotEmpty()
    readonly userDynamicFields: IUserDynamicFieldFormValues[];
}
