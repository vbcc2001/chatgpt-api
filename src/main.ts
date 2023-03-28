import { NestFactory } from '@nestjs/core';
import { MsgModule } from './api/msg.module';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(MsgModule);
  await app.listen(3000);
}

bootstrap();
