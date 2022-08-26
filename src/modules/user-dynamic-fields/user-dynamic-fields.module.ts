import { Module } from '@nestjs/common';
import { UserDynamicFieldsService } from './user-dynamic-fields.service';
import { UserDynamicFieldsController } from './user-dynamic-fields.controller';

@Module({
    controllers: [UserDynamicFieldsController],
    providers: [UserDynamicFieldsService],
})
export class UserDynamicFieldsModule {}
