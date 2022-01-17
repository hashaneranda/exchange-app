import { NestFactory } from '@nestjs/core';
import { Transport } from '@nestjs/microservices';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

const logger = new Logger();

async function bootstrap() {
  const app = await NestFactory.createMicroservice(AppModule, {
    transport: Transport.TCP,
    options: {
      host: '0.0.0.0',
      port: process.env.AUTH_SERVICE_PORT,
    },
  });
  app.listen(() =>
    logger.log(
      'Microservice Auth is listening on' + process.env.AUTH_SERVICE_PORT,
    ),
  );
}
bootstrap();
