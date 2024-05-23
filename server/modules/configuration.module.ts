import { Global, Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';

import { ConfigurationService } from '../services/configuration.service';

@Global()
@Module({
  imports: [ConfigModule.forRoot({})],
  providers: [ConfigurationService],
  exports: [ConfigurationService],
})
export class ConfigurationModule {}
