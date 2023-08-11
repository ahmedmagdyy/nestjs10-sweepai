import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DATABASE_CONNECTION_STRING } from './config/database.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    imports: [MongooseModule.forRoot(DATABASE_CONNECTION_STRING)]
  });
  await app.listen(3000);
}
bootstrap();