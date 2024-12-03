import { Controller, Get, Query } from '@nestjs/common';
import { Exercises2Service } from './exercises2.service';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Controller('')
export class Exercises2Controller {
  constructor(private readonly exercises2Service: Exercises2Service) {}

  @Get('users')
  async getWorkingDays(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    try {
      return await this.exercises2Service.getWorkingDays(offset, limit);
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }
}
