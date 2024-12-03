import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { Exercises2Module } from './exercises2.module';

@Module({
  imports: [Exercises2Module],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
