import { CustomerRewardsService } from "./customer-rewards-service";
export declare class AuthorsResolver {
    private customerRewardsService;
    constructor(customerRewardsService: CustomerRewardsService);
    getCustomerReward(id: number): Promise<import("./models/customer-rewards-dto").CustomerRewardsDTO>;
}
