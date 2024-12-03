import { Injectable } from '@nestjs/common';
import { DatabaseService } from './database.service';
import { User } from './interfaces/user.interface';
import { Meeting } from './interfaces/meeting.interface';

@Injectable()
export class Exercises2Service {
  constructor(private readonly databaseService: DatabaseService) {}

  async getWorkingDays(offset: number = 0, limit: number = 10) {
    // Lấy danh sách người dùng từ MySQL
    const users: User[] = await this.databaseService.getUsers(offset, limit);
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

      const daysWithoutMeetings = user.days - occupiedDays.size;

      return {
        id: user.id,
        first_name: user.first_name,
        last_name: user.last_name,
        email: user.email,
        gender: user.gender,
        days: user.days,
        meeting_days: meetingDays,
        days_without_meetings: daysWithoutMeetings,
      };
    });
  }
}
