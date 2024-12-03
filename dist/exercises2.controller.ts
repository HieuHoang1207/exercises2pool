import { Controller, Get, Query } from '@nestjs/common';
import { Exercises2Service } from './exercises2.service';

@Controller('')
export class Exercises2Controller {
  constructor(private readonly exercises2Service: Exercises2Service) {}

  @Get('users')
  async getWorkingDays(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    return this.exercises2Service.getWorkingDays(offset, limit);
  }
}
