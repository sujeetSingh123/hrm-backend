import { Test, TestingModule } from '@nestjs/testing';
import { AssetsManagementController } from './assets-management.controller';
import { AssetsManagementService } from './assets-management.service';

describe('AssetsManagementController', () => {
  let controller: AssetsManagementController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [AssetsManagementController],
      providers: [AssetsManagementService],
    }).compile();

    controller = module.get<AssetsManagementController>(AssetsManagementController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
