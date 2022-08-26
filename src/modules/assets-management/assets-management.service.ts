import { Injectable } from '@nestjs/common';
import { CreateAssetsManagementDto } from './dto/create-assets-management.dto';
import { UpdateAssetsManagementDto } from './dto/update-assets-management.dto';

@Injectable()
export class AssetsManagementService {
    create(createAssetsManagementDto: CreateAssetsManagementDto) {
        return 'This action adds a new assetsManagement';
    }

    findAll() {
        return `This action returns all assetsManagement`;
    }

    findOne(id: number) {
        return `This action returns a #${id} assetsManagement`;
    }

    update(id: number, updateAssetsManagementDto: UpdateAssetsManagementDto) {
        return `This action updates a #${id} assetsManagement`;
    }

    remove(id: number) {
        return `This action removes a #${id} assetsManagement`;
    }
}
