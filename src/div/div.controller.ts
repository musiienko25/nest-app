import { Controller, Get, Query } from '@nestjs/common';
import { DivService } from './div.service';

@Controller('div')
export class DivController {
  constructor(private readonly divService: DivService) {}

  @Get()
  divide(@Query('a') a: number, @Query('b') b: number) {
    return this.divService.divide(a, b);
  }
}
