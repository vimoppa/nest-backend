import * as fs from 'fs';

import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { NestExpressApplication } from '@nestjs/platform-express';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import * as bodyParser from 'body-parser';
import * as httpContext from 'express-http-context';

import { AppConstant } from './constants/app.constant';
import { HttpExceptionFilter } from './libs/middlewares/filters/http-exception.filter';
import { ApiResponseInterceptor } from './libs/middlewares/interceptors/api-response.interceptor';
import { AppModule } from './modules/app.module';
import { ConfigurationService } from './services/configuration.service';
// import { CronService } from './services/cron.service';
import { SeedService } from './services/seed.service';

class Application {
  public static async main() {
    const app = await NestFactory.create<NestExpressApplication>(AppModule);

    // await this.migrate();
    // await this.seeder(app);
    await this.docs(app);

    app.use(bodyParser.json());
    app.use(httpContext.middleware);

    // app.useGlobalInterceptors(new RequestInterceptor());
    app.useGlobalInterceptors(new ApiResponseInterceptor());
    app.useGlobalFilters(new HttpExceptionFilter());
    app.useGlobalPipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true, transform: true }));

    // app.setGlobalPrefix('api');
    app.enableCors();

    // const cronService = app.get(CronService);
    // cronService.start();

    const config = app.get(ConfigurationService);
    const server = await app.listen(config.port ?? AppConstant.defaultPort);
    server.setTimeout(AppConstant.serverTimeout);
  }

  /**
   * migrate method is used to run the database migrations.
   */
  private static async migrate(): Promise<void> {
    return;
  }

  /**
   * seeder method is used to seed the database with initial data.
   */
  private static async seeder(app: NestExpressApplication): Promise<void> {
    // const config = app.get(ConfigurationService);
    const seedService = app.get(SeedService);
    seedService.run();
  }

  /**
   * docs method is used to generate the swagger documentation for the API.
   */
  private static async docs(app: NestExpressApplication): Promise<void> {
    const config = app.get(ConfigurationService);

    const document = new DocumentBuilder()
      .setTitle(config.swagger.title)
      .setDescription(config.swagger.description)
      .setVersion(config.swagger.version)
      .addTag(config.swagger.tag)
      .setContact(config.swagger.contactName, config.swagger.contactSite, config.swagger.contactEmail)
      .build();

    fs.writeFileSync('./openapi.json', JSON.stringify(document));
    SwaggerModule.setup('docs', app, SwaggerModule.createDocument(app, document));
  }
}

Application.main();
