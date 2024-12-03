import { RowDataPacket } from 'mysql2/promise';

export interface Meeting extends RowDataPacket {
  id: number;
  user_id: number;
  room_id: number;
  start_day: number;
  end_day: number;
  created_at: Date;
}
