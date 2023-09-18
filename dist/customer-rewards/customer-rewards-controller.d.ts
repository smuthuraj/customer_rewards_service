import { CustomerRewardsService } from './customer-rewards-service';
import { RequestDTO } from './models/request-dto';
export declare class CustomerRewardsController {
    private readonly customerRewardsService;
    constructor(customerRewardsService: CustomerRewardsService);
    getRewards(headers: any): Promise<import("./models/customer-rewards-dto").CustomerRewardsDTO>;
    addRewards(requestDTO: RequestDTO): Promise<import("./models/customer-rewards-dto").CustomerRewardsDTO>;
    redeemRewards(requestDTO: RequestDTO): Promise<import("./models/customer-rewards-dto").CustomerRewardsDTO>;
}
