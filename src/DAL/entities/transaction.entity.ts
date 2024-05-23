import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';
import { UserEntity } from './user.entity';

import { TransactionStateEnum } from '../../infrastructure/config/enums/transaction-state.enum';

@Entity('transaction')
export class TransactionEntity extends BaseEntity {
  @PrimaryColumn()
  hash: string;

  @ManyToOne(() => UserEntity, (user) => user.transactions)
  user: Promise<UserEntity>;

  @Column()
  state: TransactionStateEnum;

  @CreateDateColumn()
  createdAt: Date;
}
