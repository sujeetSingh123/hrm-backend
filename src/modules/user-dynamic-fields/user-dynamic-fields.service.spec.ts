import { Test, TestingModule } from '@nestjs/testing';
import { UserDynamicFieldsService } from './user-dynamic-fields.service';

describe('UserDynamicFieldsService', () => {
    let service: UserDynamicFieldsService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UserDynamicFieldsService],
        }).compile();

        service = module.get<UserDynamicFieldsService>(
            UserDynamicFieldsService
        );
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
