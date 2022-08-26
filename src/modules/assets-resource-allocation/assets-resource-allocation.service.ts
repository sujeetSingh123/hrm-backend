import { Injectable } from '@nestjs/common';
import { CreateAssetsResourceAllocationDto } from './dto/create-assets-resource-allocation.dto';
import { UpdateAssetsResourceAllocationDto } from './dto/update-assets-resource-allocation.dto';

@Injectable()
export class AssetsResourceAllocationService {
    create(
        createAssetsResourceAllocationDto: CreateAssetsResourceAllocationDto
    ) {
        return 'This action adds a new assetsResourceAllocation';
    }

    findAll() {
        return `This action returns all assetsResourceAllocation`;
    }

    findOne(id: number) {
        return `This action returns a #${id} assetsResourceAllocation`;
    }

    update(
        id: number,
        updateAssetsResourceAllocationDto: UpdateAssetsResourceAllocationDto
    ) {
        return `This action updates a #${id} assetsResourceAllocation`;
    }

    remove(id: number) {
        return `This action removes a #${id} assetsResourceAllocation`;
    }
}
