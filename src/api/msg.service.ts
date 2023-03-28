import { Injectable } from '@nestjs/common';
import { ChatGPTAPI }  from 'chatgpt'
// import config from 'config';

@Injectable()
export class MsgService {
  async sendMessage(info: string): Promise<any> {
    //const { ChatGPTAPI } = await import('chatgpt')
    const client = new ChatGPTAPI({apiKey:"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"});
    const res = await client.sendMessage(info)
    console.log(res.text)
    return res.text
  }
}
