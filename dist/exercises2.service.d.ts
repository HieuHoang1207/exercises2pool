import { DatabaseService } from './database.service';
export declare class Exercises2Service {
    private readonly databaseService;
    constructor(databaseService: DatabaseService);
    getWorkingDays(offset?: number, limit?: number): Promise<{
        id: number;
        first_name: string;
        last_name: string;
        email: string;
        gender: string;
        days: number;
        meeting_days: string[];
        days_without_meetings: number;
    }[]>;
}
