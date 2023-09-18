import { CustomerRewardsService } from "./customer-rewards/customer-rewards-service";
export declare class AuthorsResolver {
    private customerRewardsService;
    constructor(customerRewardsService: CustomerRewardsService);
    getCustomerReward(id: number): Promise<import("./customer-rewards/models/customer-rewards-dto").CustomerRewardsDTO>;
}
