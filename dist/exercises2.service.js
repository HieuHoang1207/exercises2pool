"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercises2Service = void 0;
const common_1 = require("@nestjs/common");
const database_service_1 = require("./database.service");
let Exercises2Service = class Exercises2Service {
    constructor(databaseService) {
        this.databaseService = databaseService;
    }
    async getWorkingDays(offset = 0, limit = 10) {
        const users = await this.databaseService.getUsers(offset, limit);
        const meetings = await this.databaseService.getMeetings();
        return users.map((user) => {
            const userMeetings = meetings.filter((meeting) => meeting.user_id === user.id);
            const meetingDays = userMeetings.map((meeting) => `${meeting.start_day}->${meeting.end_day}`);
            const occupiedDays = new Set();
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
};
exports.Exercises2Service = Exercises2Service;
exports.Exercises2Service = Exercises2Service = __decorate([
    (0, common_1.Injectable)(),
    __metadata("design:paramtypes", [database_service_1.DatabaseService])
], Exercises2Service);
//# sourceMappingURL=exercises2.service.js.map