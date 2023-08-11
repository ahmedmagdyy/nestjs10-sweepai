import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { MongooseModule } from '@nestjs/mongoose';
import { DatabaseConnection } from './path/to/database.connection';

@Module({
  imports: [UserModule, MongooseModule.forRootAsync({
    useClass: DatabaseConnection,
  })],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}