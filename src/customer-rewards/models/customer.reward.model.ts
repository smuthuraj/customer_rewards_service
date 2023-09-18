import { Field, ID, ObjectType } from '@nestjs/graphql';


@ObjectType()
export class CustomerReward {
  
  @Field({nullable : true})
  first_name: string;

  @Field({nullable : true})
  middle_name: string;

  @Field({nullable : true})
  last_name: string;

  @Field({nullable : false})
  id: number;

  @Field({nullable : true})
  reward_points: number = 0;

}
