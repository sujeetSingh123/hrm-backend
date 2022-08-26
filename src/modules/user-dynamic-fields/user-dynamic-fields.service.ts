import { Injectable } from '@nestjs/common';
import { CreateUserDynamicFieldDto } from './dto/create-user-dynamic-field.dto';
import { UpdateUserDynamicFieldDto } from './dto/update-user-dynamic-field.dto';

@Injectable()
export class UserDynamicFieldsService {
    create(createUserDynamicFieldDto: CreateUserDynamicFieldDto) {
        return 'This action adds a new userDynamicField';
    }

    findAll() {
        return `This action returns all userDynamicFields`;
    }

    findOne(id: number) {
        return `This action returns a #${id} userDynamicField`;
    }

    update(id: number, updateUserDynamicFieldDto: UpdateUserDynamicFieldDto) {
        return `This action updates a #${id} userDynamicField`;
    }

    remove(id: number) {
        return `This action removes a #${id} userDynamicField`;
    }
}
