import { Controller, Get, Query } from '@nestjs/common';
import { Exercises2Service } from './exercises2.service';
import {
  InternalServerErrorException,
  NotFoundException,
} from '@nestjs/common';

@Controller('')
export class Exercises2Controller {
  constructor(private readonly exercises2Service: Exercises2Service) {}

  @Get('')
  async getWorkingDays(
    @Query('offset') offset: number = 0,
    @Query('limit') limit: number = 10,
  ) {
    try {
      const workingDays = await this.exercises2Service.getWorkingDays(
        offset,
        limit,
      );

      return {
        message:
          'Calculate meeting_days and days_without_meetings with offset and limit',
        workingDays,
      };
    } catch (error) {
      if (error instanceof NotFoundException) {
        throw error;
      }
      throw new InternalServerErrorException('An unexpected error occurred.');
    }
  }
}
