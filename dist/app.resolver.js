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
exports.CustomerRewardsResolver = void 0;
const graphql_1 = require("@nestjs/graphql");
const customer_rewards_service_gql_1 = require("./customer-rewards/customer-rewards-service.gql");
const customer_reward_model_1 = require("./customer-rewards/models/customer.reward.model");
const customer_rewards_input_1 = require("./customer-rewards/models/customer.rewards.input");
let CustomerRewardsResolver = class CustomerRewardsResolver {
    constructor(customerRewardsServiceGQL) {
        this.customerRewardsServiceGQL = customerRewardsServiceGQL;
    }
    async getCustomerReward(id) {
        return { id };
    }
    async first_name({ id }) {
        const { first_name } = await this.customerRewardsServiceGQL.getRewards(id);
        return first_name;
    }
    async last_name({ id }) {
        const { last_name } = await this.customerRewardsServiceGQL.getRewards(id);
        return last_name;
    }
    async reward_points({ id }) {
        const { reward_points } = await this.customerRewardsServiceGQL.getRewards(id);
        return reward_points;
    }
    async addReward(input) {
        return await this.customerRewardsServiceGQL.addRewards(input);
    }
};
exports.CustomerRewardsResolver = CustomerRewardsResolver;
__decorate([
    (0, graphql_1.Query)(returns => customer_reward_model_1.CustomerReward, { name: 'CustomerReward' }),
    __param(0, (0, graphql_1.Args)('id', { type: () => Number })),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], CustomerRewardsResolver.prototype, "getCustomerReward", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_reward_model_1.CustomerReward]),
    __metadata("design:returntype", Promise)
], CustomerRewardsResolver.prototype, "first_name", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_reward_model_1.CustomerReward]),
    __metadata("design:returntype", Promise)
], CustomerRewardsResolver.prototype, "last_name", null);
__decorate([
    (0, graphql_1.ResolveField)(),
    __param(0, (0, graphql_1.Parent)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_reward_model_1.CustomerReward]),
    __metadata("design:returntype", Promise)
], CustomerRewardsResolver.prototype, "reward_points", null);
__decorate([
    (0, graphql_1.Mutation)((returns) => customer_reward_model_1.CustomerReward),
    __param(0, (0, graphql_1.Args)('input')),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [customer_rewards_input_1.CustomerRewardsInput]),
    __metadata("design:returntype", Promise)
], CustomerRewardsResolver.prototype, "addReward", null);
exports.CustomerRewardsResolver = CustomerRewardsResolver = __decorate([
    (0, graphql_1.Resolver)(of => customer_reward_model_1.CustomerReward),
    __metadata("design:paramtypes", [customer_rewards_service_gql_1.CustomerRewardsServiceGQL])
], CustomerRewardsResolver);
//# sourceMappingURL=app.resolver.js.map