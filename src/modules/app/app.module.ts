import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from '../database/database.module';
import { ConfigModule } from '@/config/config.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from '@/filters/http-exception.filter';
import { ClsModule } from 'nestjs-cls';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { AppController } from './app.controller';
import { RoomsModule } from '../rooms/rooms.module';
import { RoomsService } from '../rooms/rooms.service'
import { SeedService } from '../seed/seed.service';
import { RoomRepository } from '../rooms/room.repository';
import { CustomerRepository } from '../customers/customer.repository';
import { CustomersModule } from '../customers/customers.module';
import { Room } from '../rooms/rooms.entity';
import { Customer } from '../customers/customers.entity';
import { BookingRepository } from '../bookings/booking.repository';
import { BookingsService } from '../bookings/bookings.service';
import { Booking } from '../bookings/bookings.entity';
import { BookingsModule } from '../bookings/bookings.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([Room, Booking, Customer, RoomRepository, CustomerRepository, BookingRepository]),
    DatabaseModule,
    RoomsModule,
    BookingsModule,
    CustomersModule,
    ConfigModule,
    ClsModule.forRoot({
      global: true,
      middleware: { mount: true },
    }),
    EventEmitterModule.forRoot(),
  ],
  controllers: [AppController],
  providers: [
    RoomsService,
    SeedService,
    BookingsService,
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
  ],
})
export class AppModule {}
