import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from '../rooms/rooms.entity';
import { Booking } from '../bookings/bookings.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RoomsService {
    constructor(
        @InjectRepository(Room)
        private roomRepository: Repository<Room>,
        @InjectRepository(Booking)
        private readonly bookingRepository: Repository<Booking>,
    ) {
    }

    async findAll() {
        return this.roomRepository.find();
    }

    async getAvailableRooms(start: string, end: string, page: number, limit: number): Promise<Room[]> {
        const skip = (page - 1) * limit;
        const query = this.roomRepository
            .createQueryBuilder('room')
            .leftJoin('room.bookings', 'booking')
            .where('booking.start_date > :end OR booking.end_date < :start', {start, end})
            .orWhere('booking.id IS NULL')
            .skip(skip)
            .take(limit);

        const availableRooms = await query.getMany();
        return availableRooms;
    }
}