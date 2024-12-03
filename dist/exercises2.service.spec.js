"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const testing_1 = require("@nestjs/testing");
const exercises2_service_1 = require("./exercises2.service");
const database_service_1 = require("./database.service");
describe('Exercises2Service', () => {
    let service;
    let databaseService;
    const mockUsers = [
        {
            id: 1,
            first_name: 'John',
            last_name: 'Doe',
            email: 'john.doe@example.com',
            gender: 'M',
            ip_address: '192.168.1.1',
            days: 30,
            created_at: new Date('2024-01-01T00:00:00Z'),
            constructor: { name: 'RowDataPacket' },
        },
        {
            id: 2,
            first_name: 'Jane',
            last_name: 'Smith',
            email: 'jane.smith@example.com',
            gender: 'F',
            ip_address: '192.168.1.2',
            days: 25,
            created_at: new Date('2024-02-01T00:00:00Z'),
            constructor: { name: 'RowDataPacket' },
        },
    ];
    const mockMeetings = [
        {
            id: 1,
            user_id: 1,
            room_id: 101,
            start_day: 5,
            end_day: 10,
            created_at: new Date('2024-01-01T00:00:00Z'),
            constructor: { name: 'RowDataPacket' },
        },
        {
            id: 2,
            user_id: 1,
            room_id: 102,
            start_day: 15,
            end_day: 20,
            created_at: new Date('2024-01-02T00:00:00Z'),
            constructor: { name: 'RowDataPacket' },
        },
    ];
    beforeEach(async () => {
        const module = await testing_1.Test.createTestingModule({
            providers: [
                exercises2_service_1.Exercises2Service,
                {
                    provide: database_service_1.DatabaseService,
                    useValue: {
                        getUsers: jest.fn().mockResolvedValue(mockUsers),
                        getMeetings: jest.fn().mockResolvedValue(mockMeetings),
                    },
                },
            ],
        }).compile();
        service = module.get(exercises2_service_1.Exercises2Service);
        databaseService = module.get(database_service_1.DatabaseService);
    });
    it('should be defined', () => {
        expect(service).toBeDefined();
    });
    it('should return working days for each user', async () => {
        const result = await service.getWorkingDays();
        expect(result).toEqual([
            {
                id: 1,
                first_name: 'John',
                last_name: 'Doe',
                email: 'john.doe@example.com',
                gender: 'M',
                days: 30,
                meeting_days: ['5->10', '15->20'],
                days_without_meetings: 18,
            },
            {
                id: 2,
                first_name: 'Jane',
                last_name: 'Smith',
                email: 'jane.smith@example.com',
                gender: 'F',
                days: 25,
                meeting_days: [],
                days_without_meetings: 25,
            },
        ]);
    });
});
//# sourceMappingURL=exercises2.service.spec.js.map