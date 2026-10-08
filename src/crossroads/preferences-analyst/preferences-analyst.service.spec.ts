import { Test, TestingModule } from '@nestjs/testing';
import { ConfigService } from '@nestjs/config';
import { PreferencesAnalystService } from './preferences-analyst.service';

describe('PreferencesAnalystService', () => {
  let service: PreferencesAnalystService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        PreferencesAnalystService,
        {
          provide: ConfigService,
          useValue: {
            get: jest.fn().mockReturnValue('mock-api-key'),
          },
        },
      ],
    }).compile();

    service = module.get<PreferencesAnalystService>(PreferencesAnalystService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
