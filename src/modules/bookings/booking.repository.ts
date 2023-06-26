import { EntityRepository, Repository } from 'typeorm';
import { Booking } from './bookings.entity';

@EntityRepository(Booking)
export class BookingRepository extends Repository<Booking> {

}
