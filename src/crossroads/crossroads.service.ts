import { Injectable } from '@nestjs/common';
import { CreateCrossroadDto } from './dto/create-crossroad.dto';
import { UpdateCrossroadDto } from './dto/update-crossroad.dto';

@Injectable()
export class CrossroadsService {
  create(createCrossroadDto: CreateCrossroadDto) {
    return {
      message: 'Crossroad recibido con éxito',
      data: createCrossroadDto,
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
