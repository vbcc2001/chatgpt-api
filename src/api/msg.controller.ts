import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { MsgService } from './msg.service';

@Controller('/api/msg')
export class MsgController {
    constructor(private readonly msgService: MsgService) {}
    @Get()
    test(): string {
      return 'This action returns all cats';
    }
      
    @Post()
    sendMessage(@Req() request: Request ): Promise<any> {
      return this.msgService.sendMessage(request.body.info)
    }
}