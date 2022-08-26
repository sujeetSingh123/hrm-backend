import { Test, TestingModule } from '@nestjs/testing';
import { UserDynamicFieldsController } from './user-dynamic-fields.controller';
import { UserDynamicFieldsService } from './user-dynamic-fields.service';

describe('UserDynamicFieldsController', () => {
    let controller: UserDynamicFieldsController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UserDynamicFieldsController],
            providers: [UserDynamicFieldsService],
        }).compile();

        controller = module.get<UserDynamicFieldsController>(
            UserDynamicFieldsController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
