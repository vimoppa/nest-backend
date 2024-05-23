import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

import * as httpContext from 'express-http-context';
import * as bodyParser from 'body-parser';
import * as fs from 'fs';

import { AppModule } from './modules/app.module';

import { ApiConfigService } from './infrastructure/config/api-config.service';
// import { SeedService } from './services/seed.service';

// import { RequestInterceptor } from './infrastructure/middlewares/interceptors/request.interceptor';
import { ApiResponseInterceptor } from './infrastructure/middlewares/interceptors/api-response.interceptor';
import { HttpExceptionFilter } from './infrastructure/middlewares/filters/http-exception.filter';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.use(bodyParser.json());
  app.use(httpContext.middleware);

  // app.useGlobalInterceptors(new RequestInterceptor());
  app.useGlobalInterceptors(new ApiResponseInterceptor());

  app.useGlobalFilters(new HttpExceptionFilter());

  app.setGlobalPrefix('api');
  app.enableCors();

  const swaggerConfig = new DocumentBuilder()
    .setTitle('Nest Backend - API')
    .setDescription('(v1) Documentation')
    .setVersion('1.0')
    // .addServer('http://localhost:3000')
    .build();
  const swaggerDocument = SwaggerModule.createDocument(app, swaggerConfig);

  fs.writeFileSync('./swagger.json', JSON.stringify(swaggerDocument));
  SwaggerModule.setup('api', app, swaggerDocument);

  const config = app.get(ApiConfigService);

  // if (config.seedDatabase) {
  //   const seedService = app.get(SeedService);
  //   seedService.run();
  // }

  app.enableShutdownHooks();

  await app.listen(config.port ?? 3000);
}
bootstrap();
