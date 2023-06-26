import { Module } from '@nestjs/common';
import { BookingsController } from './bookings.controller';
import { BookingsService } from './bookings.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Booking } from './bookings.entity';
import { Room } from '../rooms/rooms.entity';
import { Customer } from '../customers/customers.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Booking, Room, Customer])],
  controllers: [BookingsController],
  providers: [BookingsService],
})
export class BookingsModule {}
