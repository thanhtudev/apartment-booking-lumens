import { Module } from '@nestjs/common';
import { CustomersController } from './customers.controller';
import { CustomersService } from './customers.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Customer } from './customers.entity';
import { Booking } from '../bookings/bookings.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Customer, Booking])],
  controllers: [CustomersController],
  providers: [CustomersService],
})
export class CustomersModule {}
