import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';
import { IAssetsDetails } from '../assets-management.interface';
import { Types } from 'mongoose';
import { OrganizationsEntity } from 'src/modules/organizations/schema/organizations.schema';

@Schema({ timestamps: true, versionKey: false })
export class AssetsManagementsEntity {
    @Prop({
        required: true,
        index: true,
        uppercase: true,
        unique: false,
        trim: true,
    })
    title: string;

    @Prop({
        required: false,
        type: [
            {
                label: String,
                value: String,
            },
        ],
    })
    details: IAssetsDetails[];

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: OrganizationsEntity.name,
    })
    organizations: Types.ObjectId;
}

export const AssetsManagementDatabaseName = 'AssetsManagements';
export const AssetsManagementSchema = SchemaFactory.createForClass(
    AssetsManagementsEntity
);

export type AssetsManagementDocument = AssetsManagementsEntity & Document;

// Hooks
// AssetsManagementSchema.pre<AssetsManagementDocument>('save', function (next) {
//     this.name = this.name.toLowerCase();

//     next();
// });
