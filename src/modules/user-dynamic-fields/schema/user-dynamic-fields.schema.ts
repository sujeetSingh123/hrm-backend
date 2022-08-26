import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document, PromiseProvider } from 'mongoose';

import {
    FIELD_TYPES_ENUM,
    IOptions,
    IValidations,
} from '../user.dynamic-fields.interface';
import { OrganizationsEntity } from 'src/modules/organizations/schema/organizations.schema';

@Schema({ timestamps: true, versionKey: false })
export class UserDynamicFieldEntity {
    @Prop({
        required: true,
        index: true,
        unique: false,
        lowercase: true,
        trim: true,
    })
    label: string;

    @Prop({
        required: true,
        index: true,
        unique: false,
        lowercase: true,
        trim: true,
    })
    placeHolder: string;

    @Prop({
        required: true,
        index: true,
        unique: false,
    })
    order: number;

    @Prop({
        required: true,
        index: true,
        unique: false,
        lowercase: true,
        trim: true,
    })
    name: string;

    @Prop({
        required: true,
        enum: FIELD_TYPES_ENUM,
    })
    type: FIELD_TYPES_ENUM;

    @PromiseProvider({
        required: false,
        _id: true,
        type: [
            {
                label: String,
            },
        ],
    })
    options: IOptions[];

    @PromiseProvider({
        required: false,
        _id: true,
        type: {
            isRequired: Boolean,
            regex: String,
        },
    })
    validations: IValidations;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: OrganizationsEntity.name,
    })
    organizations: Types.ObjectId;
}

export const UserDynamicFieldDatabaseName = 'UserDynamicFields';
export const UserDynamicFieldSchema = SchemaFactory.createForClass(
    UserDynamicFieldEntity
);

export type UserDynamicFieldDocument = UserDynamicFieldEntity & Document;

// Hooks
UserDynamicFieldSchema.pre<UserDynamicFieldDocument>('save', function (next) {
    this.name = this.label.toLowerCase();

    next();
});
