import { IsArray, ArrayNotEmpty, IsString } from 'class-validator';

export class CreateCrossroadDto {
  @IsArray()
  @ArrayNotEmpty()
  @IsString({ each: true })
  roads: string[];
}
