import { Exercises2Service } from './exercises2.service';
export declare class Exercises2Controller {
    private readonly exercises2Service;
    constructor(exercises2Service: Exercises2Service);
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
