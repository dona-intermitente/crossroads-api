import { Test, TestingModule } from '@nestjs/testing';
import { CrossroadsService } from './crossroads.service';
import { PreferencesAnalystService } from './preferences-analyst/preferences-analyst.service';

describe('CrossroadsService', () => {
  let service: CrossroadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        CrossroadsService,
        {
          provide: PreferencesAnalystService,
          useValue: {
            calculatePreferences: jest.fn(),
          },
        },
      ],
    }).compile();

    service = module.get<CrossroadsService>(CrossroadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
