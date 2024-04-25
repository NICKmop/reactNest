import { Controller, Get } from '@nestjs/common';
import { TsService } from './ts.service';
import * as config from 'config';

@Controller()
export class TsController {
  constructor(
    private readonly tsService: TsService
  ) {}

  

  @Get('dataTest')
  getSerachForm(): string {
    const yamlTest = config.get('db');
    

    return 'hello mister poin';
  }
}
