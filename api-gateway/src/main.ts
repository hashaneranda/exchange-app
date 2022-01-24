import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.API_GATEWAY_PORT);

  console.log(
    'working on',
    process.env.AUTH_SERVICE_HOST,
    process.env.EXCHANGE_SERVICE_HOST,
  );
}
bootstrap();
