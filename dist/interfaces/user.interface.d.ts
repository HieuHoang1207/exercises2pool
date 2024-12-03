import { RowDataPacket } from 'mysql2/promise';
export interface User extends RowDataPacket {
    id: number;
    first_name: string;
    last_name: string;
    email: string;
    gender: string;
    ip_address: string;
    days: number;
    created_at: Date;
}
