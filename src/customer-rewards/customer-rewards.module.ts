import { Module } from '@nestjs/common';
import { CustomerRewardsController } from './customer-rewards-controller';
import { CustomerRewardsService } from './customer-rewards-service';

@Module({
    // imports: [SharedServiceModule, PatientTaskListModule, PatientProblemlistModule, PatientNotesModule],
    providers: [CustomerRewardsService],
    controllers: [CustomerRewardsController],
})
export class CustomerRewardsModule {}
