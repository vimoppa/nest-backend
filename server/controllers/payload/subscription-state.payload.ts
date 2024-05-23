import { ApiProperty } from '@nestjs/swagger';

import { TransactionStateEnum } from '../../types/enums/transaction-state.enum';

export class SubscriptionStateResponse {
  @ApiProperty()
  active: boolean;

  @ApiProperty()
  expiresAt: Date;

  @ApiProperty({ enum: TransactionStateEnum })
  transactionState: TransactionStateEnum;

  @ApiProperty()
  isNewUser: boolean;
}
