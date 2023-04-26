import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  ManyToOne,
} from 'typeorm';
import { Room } from './room.entity';
import { User } from './user.entity';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  room_id: number;

  @Column()
  chat: string;

  @ManyToOne(() => Room, (room) => room.chats)
  room: Room;

  @ManyToOne(() => User, (user) => user.chats)
  user: User;

  @CreateDateColumn()
  createdAt: Date;
}
