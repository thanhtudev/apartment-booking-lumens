import { EntityRepository, Repository } from 'typeorm';
import { Room } from './rooms.entity';

@EntityRepository(Room)
export class RoomRepository extends Repository<Room> {

}
