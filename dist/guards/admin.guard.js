"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AdminGuard = void 0;
const common_1 = require("@nestjs/common");
const jwt = require('jsonwebtoken');
let AdminGuard = class AdminGuard {
    canActivate(context) {
        const req = context.switchToHttp().getRequest();
        console.log(req.headers['token']);
        try {
            var decoded = jwt.verify(req.headers['token'], 'jsonwebtokensecret');
            if (decoded && decoded.role == 'superadmin') {
                return decoded;
            }
            return false;
        }
        catch (err) {
            return false;
        }
    }
};
AdminGuard = __decorate([
    (0, common_1.Injectable)()
], AdminGuard);
exports.AdminGuard = AdminGuard;
//# sourceMappingURL=admin.guard.js.map