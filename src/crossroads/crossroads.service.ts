import { Injectable } from '@nestjs/common';
import { CreateCrossroadDto } from './dto/create-crossroad.dto';
import { UpdateCrossroadDto } from './dto/update-crossroad.dto';
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
    return {
      roads: preferences,
    };
  }

  findAll() {
    return `This action returns all crossroads`;
  }

  findOne(id: number) {
    return `This action returns a #${id} crossroad`;
  }

  update(id: number, updateCrossroadDto: UpdateCrossroadDto) {
    return `This action updates a #${id} crossroad`;
  }

  remove(id: number) {
    return `This action removes a #${id} crossroad`;
  }
}
