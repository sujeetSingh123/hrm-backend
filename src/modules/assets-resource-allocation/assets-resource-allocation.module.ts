import { Module } from '@nestjs/common';
import { AssetsResourceAllocationService } from './assets-resource-allocation.service';
import { AssetsResourceAllocationController } from './assets-resource-allocation.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
    AssetResourceAllocationEntity,
    AssetResourceAllocationSchema,
    AssetResourceAllocationDatabaseName,
} from './schema/assets-resource-allocation.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: AssetResourceAllocationEntity.name,
                    schema: AssetResourceAllocationSchema,
                    collection: AssetResourceAllocationDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    controllers: [],
    providers: [AssetsResourceAllocationService],
    exports: [AssetsResourceAllocationService],
})
export class AssetsResourceAllocationModule {}
