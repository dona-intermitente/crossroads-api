import { ApiProperty } from '@nestjs/swagger';

export class ErrorResponseEntity {
  @ApiProperty({ example: 503, description: 'Código de estado HTTP' })
  statusCode: number;

  @ApiProperty({
    example: '2024-02-08T10:30:00.000Z',
    description: 'Momento exacto del error',
  })
  timestamp: string;

  @ApiProperty({
    example: '/crossroads',
    description: 'Ruta donde ocurrió el error',
  })
  path: string;

  @ApiProperty({
    example: 'El servicio externo GeminiAI falló: ...',
    description: 'Detalle humano del error',
  })
  error_detail: string;
}
