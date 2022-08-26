import { Test, TestingModule } from '@nestjs/testing';
import { UsersLeaveReportService } from './users-leave-report.service';

describe('UsersLeaveReportService', () => {
    let service: UsersLeaveReportService;

    beforeEach(async () => {
        const module: TestingModule = await Test.createTestingModule({
            providers: [UsersLeaveReportService],
        }).compile();

        service = module.get<UsersLeaveReportService>(UsersLeaveReportService);
    });

    it('should be defined', () => {
        expect(service).toBeDefined();
    });
});
