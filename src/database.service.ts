import {
  Injectable,
  Inject,
  InternalServerErrorException,
} from '@nestjs/common';
import { Pool, RowDataPacket } from 'mysql2/promise';
import { User } from './interfaces/user.interface'; // Định nghĩa User interface phù hợp
import { Meeting } from './interfaces/meeting.interface';

@Injectable()
export class DatabaseService {
  constructor(@Inject('DATABASE_POOL') private readonly pool: Pool) {}

  // Hàm để lấy tất cả người dùng với phân trang
  async getUsers(offset: number, limit: number): Promise<User[]> {
    try {
      const query = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`;
      const [rows] = await this.pool.query<RowDataPacket[]>(query);
      return rows as User[];
    } catch (error) {
      // Log lỗi và ném ra exception cho NestJS
      throw new InternalServerErrorException(
        'Error fetching users from the database.',
      );
    }
  }

  // Hàm để lấy tất cả các cuộc họp
  async getMeetings(): Promise<Meeting[]> {
    try {
      const [rows] = await this.pool.query<RowDataPacket[]>(
        'SELECT * FROM meetings',
      );
      return rows as Meeting[];
    } catch (error) {
      // Log lỗi và ném ra exception cho NestJS
      throw new InternalServerErrorException(
        'Error fetching meetings from the database.',
      );
    }
  }
}
