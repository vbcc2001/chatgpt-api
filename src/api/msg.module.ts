import { Module } from '@nestjs/common';
import { MsgController } from './msg.controller';
import { MsgService } from './msg.service';
@Module({
  imports: [],
  controllers: [MsgController],
  providers: [MsgService],
})
export class MsgModule {}

