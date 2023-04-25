import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  OneToMany,
} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class Room {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @OneToMany(() => User, (user) => user.room)
  users: User[];

  @CreateDateColumn()
  createAt: Date;
}
