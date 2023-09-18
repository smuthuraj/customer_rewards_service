"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerRewardsServiceGQL = void 0;
const common_1 = require("@nestjs/common");
const customer_rewards_data_1 = require("./data/customer-rewards.data");
let CustomerRewardsServiceGQL = class CustomerRewardsServiceGQL {
    async getRewards(customerID) {
        const customerReward = await customer_rewards_data_1.data[customerID - 1];
        if (customerReward == null) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        return customerReward;
    }
    async addRewards(input) {
        let id = input.id;
        let rewardPoints = input.rewardPoints;
        const customerReward = await customer_rewards_data_1.data[id - 1];
        if (customerReward == null) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        customer_rewards_data_1.data[id - 1].reward_points += rewardPoints;
        return customerReward;
    }
    async redeemRewards(input) {
        let id = input.id;
        let rewardPoints = input.rewardPoints;
        const customerReward = await customer_rewards_data_1.data[id - 1];
        if (customerReward == null) {
            throw new common_1.HttpException('User Not Found', common_1.HttpStatus.NOT_FOUND);
        }
        if (customer_rewards_data_1.data[id - 1].reward_points == 0) {
            throw new common_1.HttpException('No Reward Balance for Redemption', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        if (customer_rewards_data_1.data[id - 1].reward_points < rewardPoints) {
            throw new common_1.HttpException('Insufficient Reward Balance, Try redeeming less amount', common_1.HttpStatus.NOT_ACCEPTABLE);
        }
        customer_rewards_data_1.data[id - 1].reward_points -= rewardPoints;
        return customerReward;
    }
};
exports.CustomerRewardsServiceGQL = CustomerRewardsServiceGQL;
exports.CustomerRewardsServiceGQL = CustomerRewardsServiceGQL = __decorate([
    (0, common_1.Injectable)()
], CustomerRewardsServiceGQL);
//# sourceMappingURL=customer-rewards-service.gql.js.map