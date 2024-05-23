import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { SeedService } from '../services/seed.service';

@Module({
  imports: [TypeOrmModule.forFeature([])],
  providers: [SeedService],
  exports: [SeedService],
})
export class SeedModule {}
