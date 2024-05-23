import { TypeOrmModuleOptions } from '@nestjs/typeorm';

import { join } from 'path';
import * as dotenv from 'dotenv';

dotenv.config();

const dbConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  entities: [join(__dirname, '**', '*.entity.{ts,js}')],
  synchronize: process.env.DB_SYNC == 'false' ? false : true,
};

export default dbConfig;
