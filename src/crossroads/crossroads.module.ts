import { Module } from '@nestjs/common';
import { CrossroadsService } from './crossroads.service';
import { CrossroadsController } from './crossroads.controller';
import { PreferencesAnalystService } from './preferences-analyst/preferences-analyst.service';

@Module({
  controllers: [CrossroadsController],
  providers: [CrossroadsService, PreferencesAnalystService],
})
export class CrossroadsModule {}
