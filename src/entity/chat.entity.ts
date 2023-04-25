import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  email: string;

  @Column()
  room_id: number;

  @Column()
  chat: string;

  @CreateDateColumn()
  createdAt: Date;
}
