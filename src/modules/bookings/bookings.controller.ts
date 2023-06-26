import { Controller, Post, Body, Get, Param } from '@nestjs/common';
import { BookingsService } from '../bookings/bookings.service';

@Controller('bookings')
export class BookingsController {
  constructor(private bookingService: BookingsService) {

  }
  @Get(':id')
  getBookingById(@Param('id') id: number) {
    return this.bookingService.getBookingById(id);
  }

  @Post('book-multiple')
  async bookMultipleRooms(
      @Body('customerId') customerId: number,
      @Body('bookings') bookings: any[],
  ) {
    return await this.bookingService.bookMultipleRooms(customerId, bookings);
  }
}
