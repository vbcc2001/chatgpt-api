import { Module } from '@nestjs/common';
import { MsgController } from './api/msg.controller';

@Module({
  controllers: [MsgController],
})
export class AppModule {}
