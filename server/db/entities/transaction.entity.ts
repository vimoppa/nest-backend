import { BaseEntity, Column, CreateDateColumn, Entity, ManyToOne, PrimaryColumn } from 'typeorm';

import { TransactionStateEnum } from '../../types/enums/transaction-state.enum';

import { UserEntity } from './user.entity';

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
