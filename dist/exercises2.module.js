"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Exercises2Module = void 0;
const common_1 = require("@nestjs/common");
const exercises2_service_1 = require("./exercises2.service");
const exercises2_controller_1 = require("./exercises2.controller");
const database_service_1 = require("./database.service");
const database_providers_1 = require("./database.providers");
let Exercises2Module = class Exercises2Module {
};
exports.Exercises2Module = Exercises2Module;
exports.Exercises2Module = Exercises2Module = __decorate([
    (0, common_1.Module)({
        imports: [],
        controllers: [exercises2_controller_1.Exercises2Controller],
        providers: [
            exercises2_service_1.Exercises2Service,
            database_service_1.DatabaseService,
            ...database_providers_1.databaseProviders,
        ],
    })
], Exercises2Module);
//# sourceMappingURL=exercises2.module.js.map