import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CustomerRewardsInput {
  @Field()
  id: number;

  @Field()
  rewardPoints: number;
}
