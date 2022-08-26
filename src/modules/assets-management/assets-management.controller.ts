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
import { AssetsManagementService } from './assets-management.service';
import { CreateAssetsManagementDto } from './dto/create-assets-management.dto';
import { UpdateAssetsManagementDto } from './dto/update-assets-management.dto';
import { ENUM_AUTH_PERMISSIONS } from 'src/common/auth/constants/auth.enum.permission.constant';
import { IUserDocument } from '../user/user.interface';
import { GetUser } from '../user/decorators/user.decorator';
import { Response } from 'src/common/response/decorators/response.decorator';
import {
    AuthAdminJwtGuard,
    AuthJwtGuard,
} from 'src/common/auth/decorators/auth.jwt.decorator';
@Controller('assets-management')
export class AssetsManagementController {
    constructor(
        private readonly assetsManagementService: AssetsManagementService
    ) {}

    @Post()
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.USER_DYNAMIC_FIELDS_CRUD)
    @Response('assetsManagement.create')
    create(
        @GetUser() user: IUserDocument,
        @Body() createAssetsManagementDto: CreateAssetsManagementDto
    ) {
        return this.assetsManagementService.create(
            user,
            createAssetsManagementDto
        );
    }

    @Get('/organization')
    @Response('assetsManagement.findAllByOrganization')
    @AuthJwtGuard()
    findAllByOrganizations(@GetUser() user: IUserDocument) {
        return this.assetsManagementService.findAllByOrganizations(user);
    }

    @Get(':id')
    @Response('assetsManagement.findOne')
    findOne(@Param('id') id: string) {
        return this.assetsManagementService.findOne(id);
    }

    @Put(':id')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.USER_DYNAMIC_FIELDS_CRUD)
    @Response('assetsManagement.update')
    update(
        @Param('id') id: string,
        @Body() updateAssetsManagementDto: UpdateAssetsManagementDto
    ) {
        return this.assetsManagementService.update(
            id,
            updateAssetsManagementDto
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.assetsManagementService.remove(id);
    }
}
