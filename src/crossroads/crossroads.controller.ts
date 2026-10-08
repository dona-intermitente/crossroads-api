import { Controller, Post, Body } from '@nestjs/common';
import { CrossroadsService } from './crossroads.service';
import { CreateCrossroadDto } from './dto/create-crossroad.dto';
import { ApiResponse } from '@nestjs/swagger';
import { CrossroadAnalysisResponse } from './entities/crossroad.entity';
import { ErrorResponseEntity } from '../common/entities/error-response.entity';

@Controller('crossroads')
export class CrossroadsController {
  constructor(private readonly crossroadsService: CrossroadsService) {}

  @Post()
  @ApiResponse({
    status: 201,
    description: 'Análisis generado',
    type: CrossroadAnalysisResponse,
    isArray: true,
  })
  @ApiResponse({
    status: 503,
    description: 'Fallo de IA o Servicio Externo',
    type: ErrorResponseEntity,
  })
  create(@Body() createCrossroadDto: CreateCrossroadDto) {
    return this.crossroadsService.create(createCrossroadDto);
  }
}
