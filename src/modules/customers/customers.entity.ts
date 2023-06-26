import { StatusEnum } from '@/common/types';
import { Booking} from "@/modules/bookings/bookings.entity";
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  Unique, OneToMany,
} from 'typeorm';

@Entity()
@Unique(['email'])
export class Customer {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column()
  email: string;

  @Column()
  phone: string;

  @Column({ nullable: true })
  address: string;

  @Column({ default: StatusEnum.ACTIVE })
  status: StatusEnum;

  @OneToMany(() => Booking, booking => booking.customer)
  bookings: Booking[];

}
