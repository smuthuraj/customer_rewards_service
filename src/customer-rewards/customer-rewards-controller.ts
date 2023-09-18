import { Body, Controller, Get, Header, Headers, HttpCode, Post, Put } from '@nestjs/common';
import { CustomerRewardsService } from './customer-rewards-service';
import { RequestDTO } from './models/request-dto';
@Controller()
export class CustomerRewardsController {
    constructor(private readonly customerRewardsService: CustomerRewardsService) { }

    @HttpCode(200)
    @Get('/customer/rewards')
    @Header('Content-Type', 'application/json')
    getRewards(@Headers() headers) {
        return this.customerRewardsService.getRewards(headers['x-id']);
    }
    @Post('/customer/rewards/add')
    @Header('Content-Type', 'application/json')
    addRewards(@Body() requestDTO: RequestDTO) {
        return this.customerRewardsService.addRewards(requestDTO);
    }
    @Post('/customer/rewards/redeem')
    @Header('Content-Type', 'application/json')
    redeemRewards(@Body() requestDTO: RequestDTO) {
        return this.customerRewardsService.redeemRewards(requestDTO);
    }
}

