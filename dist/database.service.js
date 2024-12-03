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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DatabaseService = void 0;
const common_1 = require("@nestjs/common");
let DatabaseService = class DatabaseService {
    constructor(pool) {
        this.pool = pool;
    }
    async getUsers(offset, limit) {
        try {
            const query = `SELECT * FROM users LIMIT ${limit} OFFSET ${offset}`;
            const [rows] = await this.pool.query(query);
            return rows;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error fetching users from the database.');
        }
    }
    async getMeetings() {
        try {
            const [rows] = await this.pool.query('SELECT * FROM meetings');
            return rows;
        }
        catch (error) {
            throw new common_1.InternalServerErrorException('Error fetching meetings from the database.');
        }
    }
};
exports.DatabaseService = DatabaseService;
exports.DatabaseService = DatabaseService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('DATABASE_POOL')),
    __metadata("design:paramtypes", [Object])
], DatabaseService);
//# sourceMappingURL=database.service.js.map