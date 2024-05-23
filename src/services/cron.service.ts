import { Injectable } from '@nestjs/common';
import { Cron } from '@nestjs/schedule';

import { ApiConfigService } from '../infrastructure/config/api-config.service';
import { PaymentService } from './payment.service';

@Injectable()
export class CronService {
  constructor(private readonly config: ApiConfigService, private readonly paymentService: PaymentService) {}

  @Cron('0 0 0 * * *')
  everyDay() {
    console.log('\x1b[33mevery day update started\x1b[0m');

    // this.startTask.doSomething();
  }

  @Cron('0 0/1 * * * *')
  async everyMinute() {
    try {
      // await this.paymentService.updateTransactions();
    } catch (err) {
      // this.logger.error('error on update transactions', err);
      console.log('error on update transactions');
      console.error(err);
    }
  }
}
