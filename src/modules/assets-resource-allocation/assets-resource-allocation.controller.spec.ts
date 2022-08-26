import { Test, TestingModule } from '@nestjs/testing';
import { AssetsResourceAllocationController } from './assets-resource-allocation.controller';
import { AssetsResourceAllocationService } from './assets-resource-allocation.service';

describe('AssetsResourceAllocationController', () => {
    let controller: AssetsResourceAllocationController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [AssetsResourceAllocationController],
            providers: [AssetsResourceAllocationService],
        }).compile();

        controller = module.get<AssetsResourceAllocationController>(
            AssetsResourceAllocationController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
