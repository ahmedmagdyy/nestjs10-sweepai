import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { MongooseModule } from '@nestjs/mongoose';
import * as dotenv from 'dotenv';
dotenv.config();
const DATABASE_CONNECTION_STRING = process.env.DATABASE_CONNECTION_STRING;

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    imports: [MongooseModule.forRoot(DATABASE_CONNECTION_STRING)]
  });
  await app.listen(3000);
}
bootstrap();