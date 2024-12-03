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
exports.Exercises2Controller = void 0;
const common_1 = require("@nestjs/common");
const exercises2_service_1 = require("./exercises2.service");
let Exercises2Controller = class Exercises2Controller {
    constructor(exercises2Service) {
        this.exercises2Service = exercises2Service;
    }
    async getWorkingDays(offset = 0, limit = 10) {
        return this.exercises2Service.getWorkingDays(offset, limit);
    }
};
exports.Exercises2Controller = Exercises2Controller;
__decorate([
    (0, common_1.Get)('users'),
    __param(0, (0, common_1.Query)('offset')),
    __param(1, (0, common_1.Query)('limit')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, Number]),
    __metadata("design:returntype", Promise)
], Exercises2Controller.prototype, "getWorkingDays", null);
exports.Exercises2Controller = Exercises2Controller = __decorate([
    (0, common_1.Controller)(''),
    __metadata("design:paramtypes", [exercises2_service_1.Exercises2Service])
], Exercises2Controller);
//# sourceMappingURL=exercises2.controller.js.map