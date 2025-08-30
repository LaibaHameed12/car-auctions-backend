import { Module } from '@nestjs/common';
import { AuctionsService } from './auctions.service';
import { AuctionsController } from './auctions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Auction, AuctionSchema } from './schemas/auction.schema';
import { CarsModule } from 'src/cars/cars.module';
import { NotificationsModule } from 'src/notifications/notifications.module';

@Module({
  imports: [MongooseModule.forFeature([{ name: Auction.name, schema: AuctionSchema }]), CarsModule, NotificationsModule],
  controllers: [AuctionsController],
  providers: [AuctionsService],
  exports: [AuctionsService]
})
export class AuctionsModule {}
