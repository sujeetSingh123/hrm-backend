import { Test, TestingModule } from '@nestjs/testing';
import { UsersLeaveReportController } from './users-leave-report.controller';
import { UsersLeaveReportService } from './users-leave-report.service';

describe('UsersLeaveReportController', () => {
    let controller: UsersLeaveReportController;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            controllers: [UsersLeaveReportController],
            providers: [UsersLeaveReportService],
        }).compile();

        controller = module.get<UsersLeaveReportController>(
            UsersLeaveReportController
        );
    });

    it('should be defined', () => {
        expect(controller).toBeDefined();
    });
});
