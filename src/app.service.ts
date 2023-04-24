import { Injectable } from '@nestjs/common';
import { Chat } from './chat.entity';

@Injectable()
export class AppService {
  createMessage(payload: Chat) {
    throw new Error('Method not implemented.');
  }
  getHello(): string {
    return 'Hello World!';
  }
}
