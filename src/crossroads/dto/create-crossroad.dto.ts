import { ApiProperty } from '@nestjs/swagger';
import { IsArray, ArrayNotEmpty, IsString } from 'class-validator';

export class CreateCrossroadDto {
  @ApiProperty({
    description: 'Lista de opciones para analizar',
    example: ['Casa', 'Apartamento'],
  })
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  roads: string[];
}
