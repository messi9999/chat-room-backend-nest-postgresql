import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  CreateDateColumn,
} from 'typeorm';
import { Room } from './room.entity';

@Entity()
export class User {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @ManyToOne(() => Room, (room) => room.users)
  room: Room;

  @CreateDateColumn()
  createAt: Date;
}
