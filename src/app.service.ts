import { Injectable } from '@nestjs/common';
import { Chat } from './entity/chat.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { Room } from './entity/room.entity';
import { User } from './entity/user.entity';

@Injectable()
export class AppService {
  constructor(
    @InjectRepository(Chat) private chatRepository: Repository<Chat>,
    @InjectRepository(Room) private roomRepository: Repository<Room>,
    @InjectRepository(User) private userRepository: Repository<User>,
  ) {}

  // Create new room using owner email
  async createRoom(room: Room): Promise<Room> {
    return await this.roomRepository.save(room);
  }

  //Get all users in a specific room using its id
  async getUserFromRoom(uuid: string): Promise<Room[]> {
    console.log(uuid);
    return await this.roomRepository.find({
      relations: {
        users: true,
      },
      where: { id: uuid },
    });
  }

  //Add new user to a specific roomId
  async addUser(user: User): Promise<User> {
    return await this.userRepository.save(user);
  }

  // Get all the rooms
  async getRoom(): Promise<Room[]> {
    return await this.roomRepository.find();
  }

  //Get room by roomId
  async getRoomByID(uuid: string): Promise<Room> {
    return await this.roomRepository.findOne({
      where: { id: uuid },
    });
  }

  async createMessage(chat: Chat): Promise<Chat> {
    return await this.chatRepository.save(chat);
  }

  async getMessages(): Promise<Chat[]> {
    return await this.chatRepository.find();
  }
}
