import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import dbconfig from '../db/config';
import { SwaggerConfiguration } from '../types/interfaces/swagger.interface';

@Injectable()
export class ConfigurationService {
  constructor(private _configService: ConfigService) {}

  // Application Preferences

  get port(): number {
    return this._configService.get<number>('APP_PORT');
  }

  get swagger(): SwaggerConfiguration {
    return {
      title: this._configService.get<string>('SW_TITLE'),
      description: this._configService.get<string>('SW_DESCRIPTION'),
      version: this._configService.get<string>('SW_VERSION'),
      tag: this._configService.get<string>('SW_TAG'),
      contactName: this._configService.get<string>('SW_CONTACT_NAME'),
      contactSite: this._configService.get<string>('SW_CONTACT_SITE'),
      contactEmail: this._configService.get<string>('SW_CONTACT_EMAIL'),
    };
  }

  get mainControlHeaderKey(): string {
    return this._configService.get('MAIN_CONTROL_KEY');
  }

  // DB

  get db(): TypeOrmModuleOptions {
    return dbconfig;
  }
}
