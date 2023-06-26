import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Room } from '../rooms/rooms.entity';
import { Customer } from '../customers/customers.entity';

@Injectable()
export class SeedService {
    constructor(
        @InjectRepository(Room)
        private readonly roomRepository: Repository<Room>,
        @InjectRepository(Customer)
        private readonly customerRepository: Repository<Customer>,
    ) {}

    async seedRoomsAndCustomers(): Promise<void> {
        const existingCustomers = await this.customerRepository.find();
        const existingRooms = await this.roomRepository.find();

        if (existingCustomers.length > 0 || existingRooms.length > 0) {
            return;
        }

        const rooms = [
            { roomNumber: 'Room 1' },
            { roomNumber: 'Room 2' },
            { roomNumber: 'Room 3' },
            { roomNumber: 'Room 4' },
            { roomNumber: 'Room 5' },
            { roomNumber: 'Room 6' },
            { roomNumber: 'Room 7' },
            { roomNumber: 'Room 8' },
            { roomNumber: 'Room 9' },
            { roomNumber: 'Room 10' },
        ];
        await this.roomRepository.save(rooms)

        const customers = [
            {
                name: 'Customer 1',
                phone: '0001',
                email: 'customer_1@gmail.com'
            },
            {
                name: 'Customer 2',
                phone: '0002',
                email: 'customer_2@gmail.com'
            },
            {
                name: 'Customer 3',
                phone: '0003',
                email: 'customer_3@gmail.com'
            },
            {
                name: 'Customer 4',
                phone: '0004',
                email: 'customer_4@gmail.com'
            },
        ];
        await this.customerRepository.save(customers)
    }
}
