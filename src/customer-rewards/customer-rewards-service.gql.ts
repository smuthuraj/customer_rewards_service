import { HttpException, HttpStatus, Injectable } from "@nestjs/common";
import { CustomerRewardsDTO } from "./models/customer-rewards-dto"
import { RequestDTO } from "./models/request-dto";
import { data } from './data/customer-rewards.data'


@Injectable()
export class CustomerRewardsServiceGQL {
    public async getRewards(customerID: number): Promise<CustomerRewardsDTO> {
        
        const customerReward = await data[customerID-1]  
        if (customerReward == null){
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        }     
        return customerReward
    }
    public async addRewards(input: RequestDTO): Promise<CustomerRewardsDTO> {
        let id = input.id;
        let rewardPoints = input.rewardPoints;
        const customerReward = await data[id-1];
        if (customerReward == null){
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        } 
        data[id-1].reward_points += rewardPoints;
        return customerReward;
    }
    public async redeemRewards(input: RequestDTO): Promise<CustomerRewardsDTO> {
        let id = input.id;
        let rewardPoints = input.rewardPoints;
        const customerReward = await data[id-1];
        if (customerReward == null){
            throw new HttpException('User Not Found', HttpStatus.NOT_FOUND);
        } 
        if(data[id-1].reward_points == 0){
            throw new HttpException('No Reward Balance for Redemption', HttpStatus.NOT_ACCEPTABLE);
        }
        if ( data[id-1].reward_points < rewardPoints){
            throw new HttpException('Insufficient Reward Balance, Try redeeming less amount', HttpStatus.NOT_ACCEPTABLE);
        }
        data[id-1].reward_points -= rewardPoints;
        
        return customerReward;
    }
}