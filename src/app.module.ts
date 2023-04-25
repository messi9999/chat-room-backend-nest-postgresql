import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Chat } from './entity/chat.entity';
import { Room } from './entity/room.entity';
import { AppGateway } from './app.gateway';
import { User } from './entity/user.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      username: 'postgres',
      password: '12345',
      database: 'chat',
      entities: [Chat, Room, User],
      synchronize: true,
    }),
    TypeOrmModule.forFeature([Chat, Room, User]),
  ],
  controllers: [AppController],
  providers: [AppService, AppGateway],
})
export class AppModule {}
