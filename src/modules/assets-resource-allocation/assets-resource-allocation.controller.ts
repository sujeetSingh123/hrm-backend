import {
    Controller,
    Get,
    Post,
    Body,
    Patch,
    Param,
    Delete,
} from '@nestjs/common';
import { AssetsResourceAllocationService } from './assets-resource-allocation.service';
import { CreateAssetsResourceAllocationDto } from './dto/create-assets-resource-allocation.dto';
import { UpdateAssetsResourceAllocationDto } from './dto/update-assets-resource-allocation.dto';

@Controller('assets-resource-allocation')
export class AssetsResourceAllocationController {
    constructor(
        private readonly assetsResourceAllocationService: AssetsResourceAllocationService
    ) {}

    @Post()
    create(
        @Body()
        createAssetsResourceAllocationDto: CreateAssetsResourceAllocationDto
    ) {
        return this.assetsResourceAllocationService.create(
            createAssetsResourceAllocationDto
        );
    }

    @Get()
    findAll() {
        return this.assetsResourceAllocationService.findAll();
    }

    @Get(':id')
    findOne(@Param('id') id: string) {
        return this.assetsResourceAllocationService.findOne(+id);
    }

    @Patch(':id')
    update(
        @Param('id') id: string,
        @Body()
        updateAssetsResourceAllocationDto: UpdateAssetsResourceAllocationDto
    ) {
        return this.assetsResourceAllocationService.update(
            +id,
            updateAssetsResourceAllocationDto
        );
    }

    @Delete(':id')
    remove(@Param('id') id: string) {
        return this.assetsResourceAllocationService.remove(+id);
    }
}
