import { Module } from '@nestjs/common';
import { AssetsManagementService } from './assets-management.service';
import { AssetsManagementController } from './assets-management.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { AssetsManagementDatabaseName, AssetsManagementSchema, AssetsManagementsEntity } from './schema/assets-management.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';

@Module({
      imports: [
        MongooseModule.forFeature(
            [
                {
                    name: AssetsManagementsEntity.name,
                    schema: AssetsManagementSchema,
                    collection: AssetsManagementDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    controllers: [],
    providers: [AssetsManagementService],
    exports:[AssetsManagementService]
})
export class AssetsManagementModule {}
