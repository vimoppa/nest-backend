import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { CronService } from '../services/cron.service';

import { ConfigurationModule } from './configuration.module';
import { PaymentModule } from './payment.module';

@Module({
  imports: [ScheduleModule.forRoot(), ConfigurationModule, PaymentModule],
  providers: [CronService],
  exports: [CronService],
})
export class CronModule {}
