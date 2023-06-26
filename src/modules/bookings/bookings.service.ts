import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Booking } from './bookings.entity';
import { Room } from '../rooms/rooms.entity';
import { Customer } from '../customers/customers.entity';
import { Repository, LessThanOrEqual, MoreThanOrEqual } from 'typeorm';

@Injectable()
export class BookingsService {
  constructor(
    @InjectRepository(Booking)
    private bookingRepository: Repository<Booking>,
    @InjectRepository(Room)
    private readonly roomRepository: Repository<Room>,
    @InjectRepository(Customer)
    private readonly customerRepository: Repository<Customer>,
  ) {}
  async bookMultipleRooms(customerId: number, bookings: { roomId: number, start_date: string, end_date: string }[]) {

    const customer = await this.customerRepository.findOneBy({ id: customerId });

    if (!customer) {
      return 'Customer not found'
    }

    const newBookings: Booking[] = [];

    for (const bookingData of bookings) {
      const { roomId, start_date, end_date } = bookingData;
      // Validate start_date
      const startDateObj = new Date(start_date);
      if (isNaN(startDateObj.getTime())) {
        return `Invalid start date: ${start_date}`;
      }

      // Validate end_date
      const endDateObj = new Date(end_date);
      if (isNaN(endDateObj.getTime())) {
        return `Invalid end date: ${end_date}`;
      }

      // Check if end_date is earlier than start_date
      if (endDateObj < startDateObj) {
        return 'End date cannot be earlier than start date';
      }

      const room = await this.roomRepository.findOneBy({ id: roomId });

      if (!room) {
        return `Room with ID ${roomId} not found`
      }

      const existingBooking = await this.bookingRepository.findOne({
        where: {
          room_id: roomId,
          start_date: LessThanOrEqual(end_date),
          end_date: MoreThanOrEqual(start_date),
        },
      });

      if (existingBooking) {
        return `Room with ID ${roomId} is already booked during the selected period`
      }

      const newBooking = new Booking();
      newBooking.room = room;
      newBooking.customer = customer;
      newBooking.start_date = start_date;
      newBooking.end_date = end_date;

      newBookings.push(newBooking);
    }

    try {
      const savedBookings = await this.bookingRepository.save(newBookings);
      return savedBookings;
    } catch (error) {
      return `Error saving bookings: ${error.message}`;
    }
  }

  async getBookingById(id: number) {
    const booking = await this.bookingRepository.findOneBy({ id: id });
    if (!booking) {
      return 'Booking not found';
    }
    return booking;
  }

}
