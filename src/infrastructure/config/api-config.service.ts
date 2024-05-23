import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import dbConfig from '../../DAL/db-config';

@Injectable()
export class ApiConfigService {
  constructor(private configService: ConfigService) {}

  // Application Preferences

  get port(): number {
    return this.configService.get<number>('APP_PORT');
  }

  get mainControlHeaderKey(): string {
    return this.configService.get('MAIN_CONTROL_KEY');
  }

  // DB

  get dbConfig(): TypeOrmModuleOptions {
    return dbConfig;
  }
}
