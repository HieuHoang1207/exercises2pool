import { Pool } from 'mysql2/promise';
import { User } from './interfaces/user.interface';
import { Meeting } from './interfaces/meeting.interface';
export declare class DatabaseService {
    private readonly pool;
    constructor(pool: Pool);
    getUsers(offset: number, limit: number): Promise<User[]>;
    getMeetings(): Promise<Meeting[]>;
}
