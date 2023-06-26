import { StatusEnum } from '@/common/types';
import { Room } from "@/modules/rooms/rooms.entity";
import { Customer } from "@/modules/customers/customers.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  JoinColumn
} from 'typeorm';

@Entity()
export class Booking {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  customer_id: number;

  @Column()
  room_id: number;

  @Column()
  start_date: string;

  @Column()
  end_date: string;

  @Column({ default: StatusEnum.ACTIVE })
  status: StatusEnum;

  @ManyToOne(() => Room, room => room.bookings)
  @JoinColumn({ name: "room_id" })
  room: Room;

  @ManyToOne(() => Customer, customer => customer.bookings)
  @JoinColumn({ name: "customer_id" })
  customer: Customer;
}
