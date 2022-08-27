import {
    Controller,
    Get,
    Post,
    Body,
    Param,
    Delete,
    Put,
} from '@nestjs/common';
import { AssetsResourceAllocationService } from './assets-resource-allocation.service';
import { CreateAssetsResourceAllocationDto } from './dto/create-assets-resource-allocation.dto';
import { UpdateAssetsResourceAllocationDto } from './dto/update-assets-resource-allocation.dto';
import { Response } from 'src/common/response/decorators/response.decorator';
import {
    AuthAdminJwtGuard,
    AuthJwtGuard,
} from 'src/common/auth/decorators/auth.jwt.decorator';
import { ENUM_AUTH_PERMISSIONS } from 'src/common/auth/constants/auth.enum.permission.constant';

@Controller('assets-resource-allocation')
export class AssetsResourceAllocationController {
    constructor(
        private readonly assetsResourceAllocationService: AssetsResourceAllocationService
    ) {}

    @Post()
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ASSETS_ALLOCATION_STATUS_UPDATE)
    @Response('userDynamicFields.create')
    create(
        @Body()
        createAssetsResourceAllocationDto: CreateAssetsResourceAllocationDto
    ) {
        return this.assetsResourceAllocationService.create(
            createAssetsResourceAllocationDto
        );
    }

    @Get('/assets/:assetsId')
    @AuthJwtGuard()
    @Response('userDynamicFields.findAssetAllocationHistoryByAssetId')
    findAssetAllocationHistoryByAssetId(@Param('assetsId') assetsId: string) {
        return this.assetsResourceAllocationService.findAssetAllocationHistoryByAssetId(
            assetsId
        );
    }

    @Get(':id')
    @AuthJwtGuard()
    @Response('userDynamicFields.findOne')
    findOne(@Param('id') id: string) {
        return this.assetsResourceAllocationService.findOne(id);
    }

    @Put(':id')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ASSETS_ALLOCATION_STATUS_UPDATE)
    @Response('userDynamicFields.update')
    update(
        @Param('id') id: string,
        @Body()
        updateAssetsResourceAllocationDto: UpdateAssetsResourceAllocationDto
    ) {
        return this.assetsResourceAllocationService.update(
            id,
            updateAssetsResourceAllocationDto
        );
    }

    @Delete(':id')
    @AuthAdminJwtGuard(ENUM_AUTH_PERMISSIONS.ASSETS_ALLOCATION_STATUS_UPDATE)
    @Response('userDynamicFields.remove')
    remove(@Param('id') id: string) {
        return this.assetsResourceAllocationService.remove(id);
    }
}
