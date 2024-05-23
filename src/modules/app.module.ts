import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AutomapperModule } from '@automapper/nestjs';
import { classes } from '@automapper/classes';

import { ApiConfigModule } from '../infrastructure/config/api-config.module';
import { CronModule } from './cron.module';
import { PaymentModule } from './payment.module';
import { UsersModule } from './users.module';
import { SeedModule } from './seed.module';
import { SignatureModule } from './siganture.module';

import { ApiConfigService } from '../infrastructure/config/api-config.service';
import { HealthCheckController } from '../controllers/health-check.controller';
import { AdminController } from '../controllers/admin.controller';

@Module({
  imports: [
    // LoggerModule.forRootAsync({
    //   imports: [ApiConfigModule],
    //   useFactory: (configService: ApiConfigService) => configService.getElasticSearchConfig(),
    //   inject: [ApiConfigService],
    // }),
    TypeOrmModule.forRootAsync({
      imports: [ApiConfigModule],
      useFactory: (configService: ApiConfigService) => configService.dbConfig,
      inject: [ApiConfigService],
    }),
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),

    ApiConfigModule,
    CronModule,
    PaymentModule,
    UsersModule,
    SeedModule,
    SignatureModule,
  ],
  controllers: [HealthCheckController, AdminController],
})
export class AppModule {}
