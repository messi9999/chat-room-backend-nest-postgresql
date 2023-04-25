import { Body, Controller, Get, Param, Post, Res } from '@nestjs/common';
import { AppService } from './app.service';
import { Room } from './entity/room.entity';
import { Chat } from './entity/chat.entity';
import { User } from './entity/user.entity';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  //Chat home
  @Get('/chat')
  Home() {
    return { message: 'Hello world' };
  }

  //Get message
  @Get('/api/chat')
  async Chat(@Res() res) {
    const messages = await this.appService.getMessages();
    res.json(messages);
  }

  //Add user to a specific roomId
  @Post('/api/addUser')
  async AddUser(@Body() user: User) {
    return this.appService.addUser(user);
  }

  //Get users in roomId
  @Get('/api/getUsers:uuid')
  async UsersByRoomID(@Param('uuid') uuid: string) {
    return await this.appService.getUserFromRoom(uuid.replace(':', ''));
  }

  //Get all rooms
  @Get('/room')
  async Room(@Res() res) {
    const rooms = await this.appService.getRoom();
    res.json(rooms);
  }

  //Get specific room using its ID
  @Get('/room:uuid')
  async RoomByID(@Param('uuid') uuid: string) {
    return await this.appService.getRoomByID(uuid.replace(':', ''));
  }

  //Create new room uinsg owner ID
  @Post('/api/createRoom')
  async CreateRoom(@Body() room: Room) {
    return this.appService.createRoom(room);
  }
}
