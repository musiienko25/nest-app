// src/div/div.module.ts
import { Module } from '@nestjs/common';
import { DivController } from './div.controller';
import { DivService } from './div.service';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { DivInterceptor } from '../interceptors/div.interceptor';

@Module({
  controllers: [DivController],
  providers: [
    DivService,
    {
      provide: APP_INTERCEPTOR,
      useClass: DivInterceptor,
    },
  ],
})
export class DivModule {}
