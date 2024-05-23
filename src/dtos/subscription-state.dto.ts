import { ApiProperty } from '@nestjs/swagger';

import { TransactionStateEnum } from '../infrastructure/config/enums/transaction-state.enum';

export class SubscriptionStateDto {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  expiresAt: Date;

  @ApiProperty({ enum: TransactionStateEnum })
  transactionState: TransactionStateEnum;

  @ApiProperty()
  isNewUser: boolean;
}
