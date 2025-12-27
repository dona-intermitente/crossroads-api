import { Test, TestingModule } from '@nestjs/testing';
import { CrossroadsService } from './crossroads.service';

describe('CrossroadsService', () => {
  let service: CrossroadsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [CrossroadsService],
    }).compile();

    service = module.get<CrossroadsService>(CrossroadsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
