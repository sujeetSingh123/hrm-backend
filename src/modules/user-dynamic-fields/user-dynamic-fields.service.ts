import { Injectable } from '@nestjs/common';
import { CreateUserDynamicFieldDto } from './dto/create-user-dynamic-field.dto';
import { UpdateUserDynamicFieldDto } from './dto/update-user-dynamic-field.dto';
import { DatabaseEntity } from 'src/common/database/decorators/database.decorator';
import mongoose, { Model, Types } from 'mongoose';
import {
    UserDynamicFieldEntity,
    UserDynamicFieldDocument,
} from './schema/user-dynamic-fields.schema';
import { IUserDocument } from '../user/user.interface';

@Injectable()
export class UserDynamicFieldsService {
    constructor(
        @DatabaseEntity(UserDynamicFieldEntity.name)
        private readonly userDynamicFieldModal: Model<UserDynamicFieldDocument>
    ) {}
    async create(
        user: IUserDocument,
        createUserDynamicFieldDto: CreateUserDynamicFieldDto
    ) {
        const createdFields = new this.userDynamicFieldModal({
            ...createUserDynamicFieldDto,
            organizations: user.organizations,
        });

        await createdFields.save();
        return createdFields;
    }

    async findAllByOrganizations(user: IUserDocument) {
        const allFields = await this.userDynamicFieldModal
            .find({})
            .populate({
                path: 'organizations',
                match: {
                    _id: new Types.ObjectId(user._id),
                },
            })
            .lean();

        return allFields;
    }

    async findOne(id: string) {
        const field = await this.userDynamicFieldModal.findById(id);
        return field;
    }

    async update(
        id: string,
        updateUserDynamicFieldDto: UpdateUserDynamicFieldDto
    ) {
        const field = await this.userDynamicFieldModal.findById(id);
        return await this.userDynamicFieldModal.findByIdAndUpdate(
            id,
            { $set: { ...field, updateUserDynamicFieldDto } },
            { new: true }
        );
    }

    async remove(id: number) {
        const deletedFields =
            await this.userDynamicFieldModal.findByIdAndRemove(id);
        return deletedFields;
    }
}
