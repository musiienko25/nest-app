import { Module } from '@nestjs/common';
import { DivModule } from './div/div.module';

@Module({
  imports: [DivModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
