import { Module } from '@nestjs/common';
import { CrossroadsService } from './crossroads.service';
import { CrossroadsController } from './crossroads.controller';

@Module({
  controllers: [CrossroadsController],
  providers: [CrossroadsService],
})
export class CrossroadsModule {}
