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
exports.CustomerRewardsController = void 0;
const common_1 = require("@nestjs/common");
const customer_rewards_service_1 = require("./customer-rewards-service");
const request_dto_1 = require("./models/request-dto");
let CustomerRewardsController = class CustomerRewardsController {
    constructor(customerRewardsService) {
        this.customerRewardsService = customerRewardsService;
    }
    getRewards(headers) {
        return this.customerRewardsService.getRewards(headers['x-id']);
    }
    addRewards(requestDTO) {
        return this.customerRewardsService.addRewards(requestDTO);
    }
    redeemRewards(requestDTO) {
        return this.customerRewardsService.redeemRewards(requestDTO);
    }
};
exports.CustomerRewardsController = CustomerRewardsController;
__decorate([
    (0, common_1.HttpCode)(200),
    (0, common_1.Get)('/customer/rewards'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Headers)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object]),
    __metadata("design:returntype", void 0)
], CustomerRewardsController.prototype, "getRewards", null);
__decorate([
    (0, common_1.Post)('/customer/rewards/add'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.RequestDTO]),
    __metadata("design:returntype", void 0)
], CustomerRewardsController.prototype, "addRewards", null);
__decorate([
    (0, common_1.Post)('/customer/rewards/redeem'),
    (0, common_1.Header)('Content-Type', 'application/json'),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [request_dto_1.RequestDTO]),
    __metadata("design:returntype", void 0)
], CustomerRewardsController.prototype, "redeemRewards", null);
exports.CustomerRewardsController = CustomerRewardsController = __decorate([
    (0, common_1.Controller)(),
    __metadata("design:paramtypes", [customer_rewards_service_1.CustomerRewardsService])
], CustomerRewardsController);
//# sourceMappingURL=customer-rewards-controller.js.map