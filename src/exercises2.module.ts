import { Module } from '@nestjs/common';
import { Exercises2Service } from './exercises2.service';
import { Exercises2Controller } from './exercises2.controller';
import { DatabaseService } from './database.service';
import { databaseProviders } from './database.providers';

@Module({
  imports: [],
  controllers: [Exercises2Controller],
  providers: [
    Exercises2Service,
    DatabaseService,
    ...databaseProviders, // Kết nối MySQL pool
  ],
})
export class Exercises2Module {}
