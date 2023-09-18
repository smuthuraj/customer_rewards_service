import { CustomerRewardsServiceGQL } from "./customer-rewards/customer-rewards-service.gql";
import { CustomerReward } from "./customer-rewards/models/customer.reward.model";
import { CustomerRewardsInput } from "./customer-rewards/models/customer.rewards.input";
export declare class CustomerRewardsResolver {
    private customerRewardsServiceGQL;
    constructor(customerRewardsServiceGQL: CustomerRewardsServiceGQL);
    getCustomerReward(id: number): Promise<CustomerReward>;
    first_name({ id }: CustomerReward): Promise<string>;
    last_name({ id }: CustomerReward): Promise<string>;
    reward_points({ id }: CustomerReward): Promise<number>;
    addReward(input: CustomerRewardsInput): Promise<CustomerReward>;
}
