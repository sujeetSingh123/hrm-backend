import { Module } from '@nestjs/common';
import { UsersLeaveReportService } from './users-leave-report.service';
import { UsersLeaveReportController } from './users-leave-report.controller';
import { MongooseModule } from '@nestjs/mongoose';
import {
    UserLeaveReportEntity,
    UserLeaveReportSchema,
    UserLeaveReportDatabaseName,
} from './schema/user-leave-report.schema';
import { DATABASE_CONNECTION_NAME } from 'src/common/database/constants/database.constant';

@Module({
    imports: [
        MongooseModule.forFeature(
            [
                {
                    name: UserLeaveReportEntity.name,
                    schema: UserLeaveReportSchema,
                    collection: UserLeaveReportDatabaseName,
                },
            ],
            DATABASE_CONNECTION_NAME
        ),
    ],
    providers: [UsersLeaveReportService],
    exports: [UsersLeaveReportService],
})
export class UsersLeaveReportModule {}
