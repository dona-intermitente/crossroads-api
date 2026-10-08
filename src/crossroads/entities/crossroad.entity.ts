import { ApiProperty } from '@nestjs/swagger';

export class CrossroadAnalysisResponse {
  @ApiProperty({
    example: 'Comprar Casa',
    description: 'Nombre de la opción analizada',
  })
  label: string;

  @ApiProperty({
    example: 75,
    description: 'Porcentaje de preferencia estimado',
  })
  value: number;

  @ApiProperty({
    example: 'Es la opción preferida por estabilidad financiera.',
    description: 'Explicación sociológica',
  })
  description: string;
}
