import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';
import { OrganizationsEntity } from 'src/modules/organizations/schema/organizations.schema';
import { AssetsManagementsEntity } from 'src/modules/assets-management/schema/assets-management.schema';
import { UserEntity } from 'src/modules/user/schemas/user.schema';
import { ASSETS_STATUS } from '../assets-resource-allocation.interface';

@Schema({ timestamps: true, versionKey: false })
export class AssetResourceAllocationEntity {
    @Prop({
        required: true,
        index: true,
        uppercase: true,
        unique: false,
        trim: true,
    })
    title: string;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: AssetsManagementsEntity.name,
    })
    asset: Types.ObjectId;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: UserEntity.name,
    })
    user: Types.ObjectId;

    @Prop({
        required: true,
        enum: ASSETS_STATUS,
    })
    status: ASSETS_STATUS;

    @Prop({
        required: true,
        type: Date,
    })
    acquiredDate: Date;

    @Prop({
        required: false,
        type: Date,
    })
    releasedDate: Date;
}

export const AssetResourceAllocationDatabaseName = 'AssetResourceAllocations';
export const AssetResourceAllocationSchema = SchemaFactory.createForClass(
    AssetResourceAllocationEntity
);

export type AssetResourceAllocationDocument = AssetResourceAllocationEntity &
    Document;

// Hooks
// AssetResourceAllocationSchema.pre<AssetResourceAllocationDocument>('save', function (next) {
//     this.name = this.name.toLowerCase();

//     next();
// });
