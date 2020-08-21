import { Injectable } from '@nestjs/common';
import { MongooseModuleOptions, MongooseOptionsFactory } from '@nestjs/mongoose';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class MongooseConnectionService implements MongooseOptionsFactory {
    constructor(private configService: ConfigService) {}
    createMongooseOptions(): MongooseModuleOptions {
        return {
          uri: this.configService.get('database.mongo.uri'),
        };
      }

}