import { Injectable } from '@nestjs/common';
import { CreateCrossroadDto } from './dto/create-crossroad.dto';
import { PreferencesAnalystService } from './preferences-analyst/preferences-analyst.service';

@Injectable()
export class CrossroadsService {
  constructor(
    private readonly preferencesAnalystService: PreferencesAnalystService,
  ) {}

  async create(createCrossroadDto: CreateCrossroadDto) {
    const preferences =
      await this.preferencesAnalystService.calculatePreferences(
        createCrossroadDto.roads,
      );
    return preferences;
  }
}
