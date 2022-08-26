import { Module } from '@nestjs/common';
import { UserDynamicFieldsService } from './user-dynamic-fields.service';
import { UserDynamicFieldsController } from './user-dynamic-fields.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
    UserDynamicFieldEntity,
    UserDynamicFieldSchema,
    UserDynamicFieldDatabaseName,
} from './schema/user-dynamic-fields.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: UserDynamicFieldEntity.name,
                    schema: UserDynamicFieldSchema,
                    collection: UserDynamicFieldDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    controllers: [UserDynamicFieldsController],
    providers: [UserDynamicFieldsService],
})
export class UserDynamicFieldsModule {}
