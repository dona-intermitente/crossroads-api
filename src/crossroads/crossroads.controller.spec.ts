import { Test, TestingModule } from '@nestjs/testing';
import { CrossroadsController } from './crossroads.controller';
import { CrossroadsService } from './crossroads.service';

describe('CrossroadsController', () => {
  let controller: CrossroadsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CrossroadsController],
      providers: [CrossroadsService],
    }).compile();

    controller = module.get<CrossroadsController>(CrossroadsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
