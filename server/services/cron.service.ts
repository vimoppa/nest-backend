import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';

import { ConfigurationService } from './configuration.service';
import { PaymentService } from './payment.service';

@Injectable()
export class CronService {
  constructor(
    private readonly config: ConfigurationService,
    private readonly paymentService: PaymentService,
  ) {}

  @Cron(CronExpression.EVERY_DAY_AT_MIDNIGHT)
  everyDay() {
    console.log('\x1b[33mevery day update started\x1b[0m');
    // this.startTask.doSomething();
  }

  @Cron(CronExpression.EVERY_MINUTE)
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
