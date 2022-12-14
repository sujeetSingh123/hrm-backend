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
import { UserModule } from '../user/user.module';
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
        UserModule,
    ],
    controllers: [],
    providers: [OrganizationsService],
    exports: [OrganizationsService],
})
export class OrganizationsModule {}
