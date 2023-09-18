import { IsNotEmpty, IsOptional } from 'class-validator';

/* tslint:disable:max-classes-per-file */
export class CustomerRewardsDTO {
  @IsNotEmpty()
  first_name: string;

  @IsOptional()
  middle_name: string;

  @IsNotEmpty()
  last_name: string;

  @IsNotEmpty()
  id: number;

  @IsNotEmpty()
  reward_points: number = 0;

}