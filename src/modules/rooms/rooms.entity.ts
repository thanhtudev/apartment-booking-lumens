import { StatusEnum } from '@/common/types';
import { Booking} from "@/modules/bookings/bookings.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany
} from 'typeorm';

@Entity()
export class Room {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  roomNumber: string;

  @Column({ default: StatusEnum.ACTIVE })
  status: StatusEnum;

  @OneToMany(() => Booking, booking => booking.room)
  bookings: Booking[];
}
