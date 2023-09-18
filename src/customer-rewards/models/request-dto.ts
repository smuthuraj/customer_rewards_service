import { IsNotEmpty, IsOptional } from 'class-validator';

export class RequestDTO {
    @IsNotEmpty()
    id: number;

    @IsNotEmpty()
    rewardPoints: number;
}
