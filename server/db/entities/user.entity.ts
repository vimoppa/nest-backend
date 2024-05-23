import { BaseEntity, Column, Entity, OneToMany, OneToOne, PrimaryGeneratedColumn } from 'typeorm';

import { SubscriptionEntity } from './subscription.entity';
import { TransactionEntity } from './transaction.entity';

@Entity('user')
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  wallet: string;

  @OneToMany(() => TransactionEntity, (transaction) => transaction.user)
  transactions: Promise<TransactionEntity[]>;

  @OneToOne(() => SubscriptionEntity, (subscription) => subscription.user)
  subscription: Promise<SubscriptionEntity>;
}
