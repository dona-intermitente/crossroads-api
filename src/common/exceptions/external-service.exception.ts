import { HttpException, HttpStatus } from '@nestjs/common';
export class ThirdPartyServiceError extends HttpException {
  constructor(serviceName: string, detail: string) {
    super(
      {
        status: HttpStatus.SERVICE_UNAVAILABLE,
        error: `${serviceName}_FAILURE`,
        message: `El servicio externo ${serviceName} falló: ${detail}`,
      },
      HttpStatus.SERVICE_UNAVAILABLE,
    );
  }
}
