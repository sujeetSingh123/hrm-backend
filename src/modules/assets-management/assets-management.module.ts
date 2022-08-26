import { Module } from '@nestjs/common';
import { AssetsManagementService } from './assets-management.service';
import { AssetsManagementController } from './assets-management.controller';

@Module({
  controllers: [AssetsManagementController],
  providers: [AssetsManagementService]
})
export class AssetsManagementModule {}
