import { Injectable } from '@nestjs/common';

@Injectable()
export class TsService {
  getHello(): string {
    return 'Hello World!';
  }
}
