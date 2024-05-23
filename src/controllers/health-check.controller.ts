import { Controller, Get } from '@nestjs/common';
import { ApiResponse } from '@nestjs/swagger';

@Controller('health-check')
export class HealthCheckController {
  @Get('/')
  @ApiResponse({ status: 200, description: 'responses 200 if ok' })
  getHealthCheck() {
    return;
  }
}
