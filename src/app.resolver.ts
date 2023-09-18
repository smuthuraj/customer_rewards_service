import { Args, Int, Mutation, Parent, Query, ResolveField, Resolver } from "@nestjs/graphql";
import { CustomerRewardsService } from "./customer-rewards/customer-rewards-service";
import { CustomerRewardsServiceGQL } from "./customer-rewards/customer-rewards-service.gql";
import { CustomerRewardsDTO } from "./customer-rewards/models/customer-rewards-dto";
import { CustomerReward } from "./customer-rewards/models/customer.reward.model";
import { CustomerRewardsInput } from "./customer-rewards/models/customer.rewards.input";
import { RequestDTO } from "./customer-rewards/models/request-dto";

@Resolver(of => CustomerReward)
// @Resolver()
export class CustomerRewardsResolver {
  constructor(
    private customerRewardsServiceGQL : CustomerRewardsServiceGQL,
    
  ) {}

  @Query(returns => CustomerReward, { name: 'CustomerReward' })
  async getCustomerReward(@Args('id', { type: () => Number }) id: number) {
    // return this.customerRewardsServiceGQL.getRewards(id);
    return { id } as CustomerReward;
  }
  @ResolveField()
  async first_name(@Parent() { id }: CustomerReward): Promise<string> {
    const { first_name } = await this.customerRewardsServiceGQL.getRewards(id);
    return first_name;
  }
  @ResolveField()
  async last_name(@Parent() { id }: CustomerReward): Promise<string> {
    const { last_name } = await this.customerRewardsServiceGQL.getRewards(id);
    return last_name;
  }
  @ResolveField()
  async reward_points(@Parent() { id }: CustomerReward): Promise<number> {
    const { reward_points } = await this.customerRewardsServiceGQL.getRewards(id);
    return reward_points;
  }

  @Mutation((returns) => CustomerReward)
  async addReward(@Args('input') input: CustomerRewardsInput): Promise<CustomerReward> {
    return await this.customerRewardsServiceGQL.addRewards(input);
  }

}