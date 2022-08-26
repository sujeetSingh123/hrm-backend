import { Injectable } from '@nestjs/common';
import { CreateAssetsManagementDto } from './dto/create-assets-management.dto';
import { UpdateAssetsManagementDto } from './dto/update-assets-management.dto';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import {
    AssetsManagementsEntity,
    AssetsManagementDocument,
} from './schema/assets-management.schema';
import { Model, Types } from 'mongoose';
import { IUserDocument } from '../user/user.interface';

@Injectable()
export class AssetsManagementService {
    constructor(
        @DatabaseEntity(AssetsManagementsEntity.name)
        private readonly assetsManagementModal: Model<AssetsManagementDocument>
    ) {}
    create(
        user: IUserDocument,
        createAssetsManagementDto: CreateAssetsManagementDto
    ) {
        const newAssets = new this.assetsManagementModal({
            ...createAssetsManagementDto,
            organization: new Types.ObjectId(user.organizations),
        });
    }

    async findAll() {
        return await this.assetsManagementModal.find({}).lean();
    }

    async findAllByOrganizations(user: IUserDocument) {
        const allAssets = await this.assetsManagementModal
            .find({})
            .populate({
                path: 'organizations',
                match: {
                    _id: new Types.ObjectId(user._id),
                },
            })
            .lean();

        return allAssets;
    }

    async findOne(id: string) {
        return await this.assetsManagementModal.findById(id).lean();
    }

    async update(
        id: string,
        updateAssetsManagementDto: UpdateAssetsManagementDto
    ) {
        const assets = await this.assetsManagementModal.findById(id);

        assets['title'] = updateAssetsManagementDto.title || assets.title;
        assets['details'] = updateAssetsManagementDto.details || assets.details;

        return await assets.save();
    }

    async remove(id: string) {
        return await this.assetsManagementModal.findByIdAndDelete(id);
    }
}
