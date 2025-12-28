import { Test, TestingModule } from '@nestjs/testing';
import { PreferencesAnalystService } from './preferences-analyst.service';

describe('PreferencesAnalystService', () => {
  let service: PreferencesAnalystService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PreferencesAnalystService],
    }).compile();

    service = module.get<PreferencesAnalystService>(PreferencesAnalystService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
