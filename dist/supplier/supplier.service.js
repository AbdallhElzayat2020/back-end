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
exports.SupplierService = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const typeorm_2 = require("typeorm");
const supplier_entity_1 = require("./entities/supplier.entity");
let SupplierService = class SupplierService {
    constructor(repo) {
        this.repo = repo;
    }
    async create(createSupplierDto) {
        const supplier = await this.repo.create(createSupplierDto);
        return this.repo.save(supplier);
    }
    async findAllByIds(ids) {
        console.log(ids, 'id');
        if (!ids) {
            throw new common_1.UnauthorizedException('unAuthorized');
        }
        const supplier = await this.repo.find({
            where: { id: (0, typeorm_2.In)(ids) },
        });
        if (!supplier) {
            throw new common_1.NotFoundException('supplier not found');
        }
        return supplier;
    }
    async findAll() {
        const supplier = await this.repo.find({});
        return supplier;
    }
    async findOne(id) {
        console.log(id, 'id');
        if (!id) {
            throw new common_1.UnauthorizedException('unAuthorized');
        }
        const supplier = await this.repo.findOne({ where: { id } });
        if (!supplier) {
            throw new common_1.NotFoundException('supplier not found');
        }
        return supplier;
    }
    async update(id, updateSupplierDto) {
        const supplier = await this.findOne(id);
        if (!supplier) {
            throw new common_1.NotFoundException('supplier not found');
        }
        Object.assign(supplier, updateSupplierDto);
        return this.repo.save(supplier);
    }
    async remove(id) {
        const supplier = await this.findOne(id);
        if (!supplier) {
            throw new common_1.NotFoundException('supplier not found');
        }
        return this.repo.remove(supplier);
    }
};
SupplierService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, typeorm_1.InjectRepository)(supplier_entity_1.Supplier)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], SupplierService);
exports.SupplierService = SupplierService;
//# sourceMappingURL=supplier.service.js.map