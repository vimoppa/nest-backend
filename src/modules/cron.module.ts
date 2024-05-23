import { Module } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';

import { ApiConfigModule } from '../infrastructure/config/api-config.module';
import { PaymentModule } from './payment.module';

import { CronService } from '../services/cron.service';

@Module({
  imports: [ScheduleModule.forRoot(), ApiConfigModule, PaymentModule],
  providers: [CronService],
  exports: [CronService],
})
export class CronModule {}
