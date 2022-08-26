import { Module } from '@nestjs/common';
import { OrganizationsService } from './organizations.service';
import { OrganizationsController } from './organizations.controller';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';
import {
    OrganizationSchema,
    OrganizationsEntity,
    OrganizationDatabaseName,
} from './schema/organizations.schema';
import { MongooseModule } from '@nestjs/mongoose';
@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: OrganizationsEntity.name,
                    schema: OrganizationSchema,
                    collection: OrganizationDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    controllers: [],
    providers: [OrganizationsService],
    exports: [OrganizationsService],
})
export class OrganizationsModule {}
