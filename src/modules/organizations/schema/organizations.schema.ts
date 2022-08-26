import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Types, Document } from 'mongoose';
import {
    ICalenderMarking,
    ILeaveTypeWithCount,
} from '../organization.interface';
import { IAwsS3 } from 'src/common/aws/aws.interface';

@Schema({ timestamps: true, versionKey: false })
export class OrganizationsEntity {
    @Prop({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
    })
    name: string;

    @Prop({
        required: true,
        index: true,
        unique: true,
        lowercase: true,
        trim: true,
    })
    website: string;

    @Prop({
        required: true,
        index: true,
        unique: false,
        lowercase: true,
        trim: true,
    })
    descriptions: string;

    @Prop({
        required: false,
        _id: false,
        type: {
            path: String,
            pathWithFilename: String,
            filename: String,
            completedUrl: String,
            baseUrl: String,
            mime: String,
        },
    })
    logo?: IAwsS3;

    @Prop({
        required: false,
        _id: false,
        type: {
            path: String,
            pathWithFilename: String,
            filename: String,
            completedUrl: String,
            baseUrl: String,
            mime: String,
        },
    })
    hrManual?: IAwsS3;

    @Prop({
        required: false,
        _id: true,
        type: [
            {
                date: Date,
                type: String,
                label: String,
                descriptions: String,
            },
        ],
    })
    calenders: ICalenderMarking[];

    @Prop({
        required: false,
        _id: true,
        type: [
            {
                label: String,
                noOfDays: Number,
                descriptions: String,
            },
        ],
    })
    leaveCountWithDays: ILeaveTypeWithCount[];
}

export const OrganizationDatabaseName = 'Organizations';
export const OrganizationSchema =
    SchemaFactory.createForClass(OrganizationsEntity);

export type OrganizationDocument = OrganizationsEntity & Document;

// Hooks
OrganizationSchema.pre<OrganizationDocument>('save', function (next) {
    this.name = this.name.toLowerCase();

    next();
});
