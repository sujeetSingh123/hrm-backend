import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { UserDynamicFieldsService } from './user-dynamic-fields.service';
import { CreateUserDynamicFieldDto } from './dto/create-user-dynamic-field.dto';
import { UpdateUserDynamicFieldDto } from './dto/update-user-dynamic-field.dto';
import { Response } from 'src/common/response/decorators/response.decorator';
import {
    AuthAdminJwtGuard,
    AuthJwtGuard,
} from 'src/common/auth/decorators/auth.jwt.decorator';
import { ENUM_AUTH_PERMISSIONS } from 'src/common/auth/constants/auth.enum.permission.constant';
import { IUserDocument } from '../user/user.interface';
import { GetUser } from '../user/decorators/user.decorator';

@Controller('user-dynamic-fields')
export class UserDynamicFieldsController {
    constructor(
        private readonly userDynamicFieldsService: UserDynamicFieldsService
    ) {}

    @Post()
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.USER_DYNAMIC_FIELDS_CRUD)
    @Response('userDynamicFields.create')
    create(
        @GetUser() user: IUserDocument,
        @Body() createUserDynamicFieldDto: CreateUserDynamicFieldDto
    ) {
        return this.userDynamicFieldsService.create(
            user,
            createUserDynamicFieldDto
        );
    }

    @Get(':id')
    @Response('userDynamicFields.findOne')
    @AuthJwtGuard()
    findOne(@Param('id') id: string) {
        return this.userDynamicFieldsService.findOne(id);
    }

    @Get('/organization')
    @Response('userDynamicFields.findAllByOrganization')
    @AuthJwtGuard()
    findAllByOrganizations(@GetUser() user: IUserDocument) {
        return this.userDynamicFieldsService.findAllByOrganizations(user);
    }

    @Put(':id')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.USER_DYNAMIC_FIELDS_CRUD)
    @Response('userDynamicFields.update')
    update(
        @Param('id') id: string,
        @Body() updateUserDynamicFieldDto: UpdateUserDynamicFieldDto
    ) {
        return this.userDynamicFieldsService.update(
            id,
            updateUserDynamicFieldDto
        );
    }

    @Delete(':id')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.USER_DYNAMIC_FIELDS_CRUD)
    @Response('userDynamicFields.delete')
    remove(@Param('id') id: string) {
        return this.userDynamicFieldsService.remove(+id);
    }
}
