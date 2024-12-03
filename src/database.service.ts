import { Injectable } from '@nestjs/common';
import { Pool, RowDataPacket } from 'mysql2/promise';
import { Inject } from '@nestjs/common';
import { User } from './interfaces/user.interface'; // Định nghĩa User interface phù hợp
import { Meeting } from './interfaces/meeting.interface';

@Injectable()
export class DatabaseService {
  constructor(@Inject('DATABASE_POOL') private pool: Pool) {}

  // Hàm để lấy tất cả người dùng
  async getUsers(offset: number, limit: number): Promise<User[]> {
    const [rows] = await this.pool.query<User[] & RowDataPacket[]>(
      'SELECT * FROM users LIMIT ? OFFSET ?',
      [limit, offset],
    );
    return rows;
  }

  // Hàm để lấy tất cả các cuộc họp
  async getMeetings(): Promise<Meeting[]> {
    const [rows] = await this.pool.query<Meeting[] & RowDataPacket[]>(
      'SELECT * FROM meetings',
    );
    return rows;
  }
}
