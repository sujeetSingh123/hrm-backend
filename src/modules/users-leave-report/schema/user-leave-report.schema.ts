import { Schema, Prop, SchemaFactory } from '@nestjs/mongoose';

import { Types } from 'mongoose';
import { OrganizationsEntity } from 'src/modules/organizations/schema/organizations.schema';
import { UserEntity } from 'src/modules/user/schemas/user.schema';
import {
    LEAVE_REPORT_STATUS,
    LEAVE_HALF_FULL,
} from '../user-leave-report.interface';

@Schema({ timestamps: true, versionKey: false })
export class UserLeaveReportEntity {
    @Prop({
        required: true,
        index: true,
        uppercase: true,
        unique: false,
        trim: true,
    })
    descriptions: string;

    @Prop({
        required: true,
        type: Types.ObjectId,
        ref: UserEntity.name,
    })
    user: Types.ObjectId;

    @Prop({
        required: false,
        type: Types.ObjectId,
        ref: UserEntity.name,
    })
    approvedBy: Types.ObjectId;

    @Prop({
        required: true,
        enum: LEAVE_REPORT_STATUS,
        default: LEAVE_REPORT_STATUS.PENDING,
    })
    status: LEAVE_REPORT_STATUS;

    @Prop({
        required: true,
        type: [Types.ObjectId],
        ref: UserEntity.name,
    })
    requestLeaveTo: Types.ObjectId[];

    @Prop({
        required: true,
        type: Number,
        default: 1,
    })
    leaveDays: number;

    @Prop({
        required: true,
        type: Date,
    })
    leaveFrom: Date;

    @Prop({
        required: true,
        type: Date,
    })
    leaveTo: Date;

    @Prop({
        required: true,
        type: Types.ObjectId,
    })
    leaveType: Types.ObjectId;

    @Prop({
        required: true,
        enum: LEAVE_HALF_FULL,
        default: LEAVE_HALF_FULL.FULL,
    })
    halfOrFull: LEAVE_HALF_FULL;
}

export const UserLeaveReportDatabaseName = 'UserLeaveReports';
export const UserLeaveReportSchema = SchemaFactory.createForClass(
    UserLeaveReportEntity
);

export type UserLeaveReportDocument = UserLeaveReportEntity & Document;

// Hooks
// UserLeaveReportSchema.pre<UserLeaveReportDocument>('save', function (next) {
//     this.name = this.name.toLowerCase();

//     next();
// });
