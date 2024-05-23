import { classes } from '@automapper/classes';
import { AutomapperModule } from '@automapper/nestjs';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AdminController } from '../controllers/admin.controller';
import { HealthCheckController } from '../controllers/health-check.controller';
import { ConfigurationService } from '../services/configuration.service';

import { ConfigurationModule } from './configuration.module';
import { CronModule } from './cron.module';
import { PaymentModule } from './payment.module';
import { SeedModule } from './seed.module';
import { SignatureModule } from './siganture.module';
import { UsersModule } from './users.module';

@Module({
  imports: [
    // LoggerModule.forRootAsync({
    //   imports: [ApiConfigModule],
    //   useFactory: (configService: ApiConfigService) => configService.getElasticSearchConfig(),
    //   inject: [ApiConfigService],
    // }),

    // TypeOrmModule is used to connect to the database.
    TypeOrmModule.forRootAsync({
      imports: [ConfigurationModule],
      inject: [ConfigurationService],
      useFactory: (configService: ConfigurationService) => configService.db,
    }),
    // Automapper Module is used to map DTOs to Entities and vice versa.
    AutomapperModule.forRoot({
      strategyInitializer: classes(),
    }),

    // SeedModule is used to seed the database with initial data.
    SeedModule,

    // ConfigurationModule is used to load the configuration from the .env file.
    ConfigurationModule,

    // Modules for the application.
    CronModule,
    UsersModule,
    PaymentModule,
    SignatureModule,
  ],
  controllers: [HealthCheckController, AdminController],
})
export class AppModule {}
