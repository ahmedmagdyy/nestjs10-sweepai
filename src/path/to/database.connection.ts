import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class DatabaseConnection implements MongooseOptionsFactory {
  constructor(private configService: ConfigService) {}

  createMongooseOptions(): MongooseModuleOptions {
    const connectionString = this.configService.get<string>('DATABASE_CONNECTION_STRING');

    return {
      uri: connectionString,
      useNewUrlParser: true,
      useUnifiedTopology: true,
    };
  }
}
