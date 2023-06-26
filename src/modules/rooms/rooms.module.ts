import { Module } from '@nestjs/common';
import { RoomsController } from './rooms.controller';
import { RoomsService } from './rooms.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Room } from './rooms.entity';
import { Booking } from '../bookings/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Room, Booking])],
  controllers: [RoomsController],
  providers: [RoomsService],
})
export class RoomsModule {}
