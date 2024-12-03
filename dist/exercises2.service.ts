import { Injectable, NotFoundException } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { User } from './interfaces/user.interface';
import { Meeting } from './interfaces/meeting.interface';

@Injectable()
export class Exercises2Service {
  constructor(private readonly databaseService: DatabaseService) {}

  async getWorkingDays(offset: number = 0, limit: number = 10) {
    // Lấy danh sách người dùng từ MySQL
    const users: User[] = await this.databaseService.getUsers(offset, limit);
    if (users.length === 0) {
      throw new NotFoundException('No more users available.');
    }

    const meetings: Meeting[] = await this.databaseService.getMeetings();

    return users.map((user) => {
      const userMeetings = meetings.filter(
        (meeting) => meeting.user_id === user.id,
      );

      // Map meeting days
      const meetingDays = userMeetings.map(
        (meeting) => `${meeting.start_day}->${meeting.end_day}`,
      );

      // Calculate free days
      const occupiedDays = new Set<number>();
      userMeetings.forEach((meeting) => {
        for (let day = meeting.start_day; day <= meeting.end_day; day++) {
          occupiedDays.add(day);
        }
      });

      // Kiểm tra lại cách tính số ngày tự do
      const daysWithoutMeetings = user.days - occupiedDays.size;

      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        days: user.days,
        meeting_days: meetingDays,
        days_without_meetings: daysWithoutMeetings, // Sửa lại logic tính ngày tự do
      };
    });
  }
}
