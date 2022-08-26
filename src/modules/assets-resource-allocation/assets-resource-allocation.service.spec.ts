import { Test, TestingModule } from '@nestjs/testing';
import { AssetsResourceAllocationService } from './assets-resource-allocation.service';

describe('AssetsResourceAllocationService', () => {
    let service: AssetsResourceAllocationService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [AssetsResourceAllocationService],
        }).compile();

        service = module.get<AssetsResourceAllocationService>(
            AssetsResourceAllocationService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
