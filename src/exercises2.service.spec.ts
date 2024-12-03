// src/exercises2/exercises2.service.spec.ts
import { Test, TestingModule } from '@nestjs/testing';
import { Exercises2Service } from './exercises2.service';
import { DatabaseService } from './database.service';
import { User } from './interfaces/user.interface';
import { Meeting } from './interfaces/meeting.interface';

describe('Exercises2Service', () => {
  let service: Exercises2Service;
  let databaseService: DatabaseService;

  // Mock dữ liệu người dùng (mockUsers)
  const mockUsers: User[] = [
    {
      id: 1,
      first_name: 'John',
      last_name: 'Doe',
      email: 'john.doe@example.com',
      gender: 'M',
      ip_address: '192.168.1.1', // Đảm bảo có ip_address
      days: 30,
      created_at: new Date('2024-01-01T00:00:00Z'), // Đảm bảo có created_at
      constructor: { name: 'RowDataPacket' }, // Thêm constructor để mock cho RowDataPacket
    },
    {
      id: 2,
      first_name: 'Jane',
      last_name: 'Smith',
      email: 'jane.smith@example.com',
      gender: 'F',
      ip_address: '192.168.1.2', // Đảm bảo có ip_address
      days: 25,
      created_at: new Date('2024-02-01T00:00:00Z'), // Đảm bảo có created_at
      constructor: { name: 'RowDataPacket' }, // Thêm constructor để mock cho RowDataPacket
    },
  ];

  // Mock dữ liệu cuộc họp (mockMeetings)
  const mockMeetings: Meeting[] = [
    {
      id: 1,
      user_id: 1,
      room_id: 101,
      start_day: 5,
      end_day: 10,
      created_at: new Date('2024-01-01T00:00:00Z'),
      constructor: { name: 'RowDataPacket' }, // Thêm constructor để mock cho RowDataPacket
    },
    {
      id: 2,
      user_id: 1,
      room_id: 102,
      start_day: 15,
      end_day: 20,
      created_at: new Date('2024-01-02T00:00:00Z'),
      constructor: { name: 'RowDataPacket' }, // Thêm constructor để mock cho RowDataPacket
    },
  ];

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        Exercises2Service,
        {
          provide: DatabaseService,
          useValue: {
            getUsers: jest.fn().mockResolvedValue(mockUsers),
            getMeetings: jest.fn().mockResolvedValue(mockMeetings),
          },
        },
      ],
    }).compile();

    service = module.get<Exercises2Service>(Exercises2Service);
    databaseService = module.get<DatabaseService>(DatabaseService);
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
        days_without_meetings: 18, // Số ngày tự do được tính chính xác
      },
      {
        id: 2,
        first_name: 'Jane',
        last_name: 'Smith',
        email: 'jane.smith@example.com',
        gender: 'F',
        days: 25,
        meeting_days: [],
        days_without_meetings: 25, // Không có cuộc họp, tất cả ngày là tự do
      },
    ]);
  });
});
