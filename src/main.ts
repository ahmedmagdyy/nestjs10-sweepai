import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongooseModule } from '@nestjs/mongoose';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    imports: [MongooseModule.forRoot('mongodb://localhost/nest')]
  });
  await app.listen(3000);
}
bootstrap();