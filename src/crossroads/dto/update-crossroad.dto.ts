import { PartialType } from '@nestjs/mapped-types';
import { CreateCrossroadDto } from './create-crossroad.dto';

export class UpdateCrossroadDto extends PartialType(CreateCrossroadDto) {}
