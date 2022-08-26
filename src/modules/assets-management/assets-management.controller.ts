import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AssetsManagementService } from './assets-management.service';
import { CreateAssetsManagementDto } from './dto/create-assets-management.dto';
import { UpdateAssetsManagementDto } from './dto/update-assets-management.dto';

@Controller('assets-management')
export class AssetsManagementController {
  constructor(private readonly assetsManagementService: AssetsManagementService) {}

  @Post()
  create(@Body() createAssetsManagementDto: CreateAssetsManagementDto) {
    return this.assetsManagementService.create(createAssetsManagementDto);
  }

  @Get()
  findAll() {
    return this.assetsManagementService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.assetsManagementService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateAssetsManagementDto: UpdateAssetsManagementDto) {
    return this.assetsManagementService.update(+id, updateAssetsManagementDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.assetsManagementService.remove(+id);
  }
}
