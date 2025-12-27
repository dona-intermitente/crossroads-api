import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CrossroadsService } from './crossroads.service';
import { CreateCrossroadDto } from './dto/create-crossroad.dto';
import { UpdateCrossroadDto } from './dto/update-crossroad.dto';

@Controller('crossroads')
export class CrossroadsController {
  constructor(private readonly crossroadsService: CrossroadsService) {}

  @Post()
  create(@Body() createCrossroadDto: CreateCrossroadDto) {
    return this.crossroadsService.create(createCrossroadDto);
  }

  @Get()
  findAll() {
    return this.crossroadsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.crossroadsService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCrossroadDto: UpdateCrossroadDto,
  ) {
    return this.crossroadsService.update(+id, updateCrossroadDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.crossroadsService.remove(+id);
  }
}
