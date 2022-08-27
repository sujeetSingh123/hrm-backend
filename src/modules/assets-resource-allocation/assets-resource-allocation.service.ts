import { Injectable } from '@nestjs/common';
import { CreateAssetsResourceAllocationDto } from './dto/create-assets-resource-allocation.dto';
import { UpdateAssetsResourceAllocationDto } from './dto/update-assets-resource-allocation.dto';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import {
    AssetResourceAllocationEntity,
    AssetResourceAllocationDocument,
} from './schema/assets-resource-allocation.schema';
import { Model, Types } from 'mongoose';

@Injectable()
export class AssetsResourceAllocationService {
    constructor(
        @DatabaseEntity(AssetResourceAllocationEntity.name)
        private readonly assetResourceAllocationEntity: Model<AssetResourceAllocationDocument>
    ) {}
    async create(
        createAssetsResourceAllocationDto: CreateAssetsResourceAllocationDto
    ) {
        const assetResourceAllocation = new this.assetResourceAllocationEntity({
            ...createAssetsResourceAllocationDto,
            asset: new Types.ObjectId(createAssetsResourceAllocationDto.asset),
            user: new Types.ObjectId(createAssetsResourceAllocationDto.user),
        });

        return assetResourceAllocation.save();
    }

    async findAssetAllocationHistoryByAssetId(id: string) {
        const assetsLists = await this.assetResourceAllocationEntity.find({
            asset: new Types.ObjectId(id),
        });
        return assetsLists;
    }

    async findOne(id: string) {
        const assetsAllocationDetails =
            await this.assetResourceAllocationEntity.findById(id);
        return assetsAllocationDetails;
    }

    async update(id: string, updateDto: UpdateAssetsResourceAllocationDto) {
        const assetsResourceAlloc =
            await this.assetResourceAllocationEntity.findById(id);
        return await this.assetResourceAllocationEntity.findByIdAndUpdate(
            id,
            { $set: { ...assetsResourceAlloc, ...updateDto } },
            { new: true }
        );
    }

    async remove(id: string) {
        const deletedAssetsAllocated =
            await this.assetResourceAllocationEntity.findByIdAndDelete(id);
        return deletedAssetsAllocated;
    }
}
