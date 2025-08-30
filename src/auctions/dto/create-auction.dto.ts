import { IsNotEmpty, IsMongoId, IsNumber, Min, IsDateString, IsOptional } from 'class-validator';

export class CreateAuctionDto {
    @IsNotEmpty()
    @IsMongoId()
    car: string;

    @IsNotEmpty()
    @IsMongoId()
    seller: string;

    @IsOptional()
    @IsDateString()
    startTime?: string;  // optional, defaults to current time

    @IsNotEmpty()
    @IsDateString()
    endTime: string;

    @IsNotEmpty()
    @IsNumber()
    @Min(0)
    startingBid: number;

    @IsOptional()
    @IsNumber()
    @Min(1)
    minIncrement?: number;  // optional, defaults to startingBid / 100
}
