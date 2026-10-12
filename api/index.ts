import { NestFactory } from '@nestjs/core';
import type { INestApplication } from '@nestjs/common';
import { AppModule } from '../src/app.module';
import { configureApp } from '../src/app.setup';

let cachedApp: INestApplication;

async function bootstrap(): Promise<INestApplication> {
  if (!cachedApp) {
    cachedApp = await NestFactory.create(AppModule);
    configureApp(cachedApp);
    await cachedApp.init();
  }
  return cachedApp;
}

export default async function handler(req: any, res: any): Promise<void> {
  const app = await bootstrap();
  const instance = app.getHttpAdapter().getInstance();
  return instance(req, res);
}
