import { CustomerRewardsDTO } from "./models/customer-rewards-dto";
import { RequestDTO } from "./models/request-dto";
export declare class CustomerRewardsService {
    getRewards(customerID: number): Promise<CustomerRewardsDTO>;
    addRewards(input: RequestDTO): Promise<CustomerRewardsDTO>;
    redeemRewards(input: RequestDTO): Promise<CustomerRewardsDTO>;
}
