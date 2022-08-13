import { Module } from '@nestjs/common';
import { BService } from './b.service';

@Module({
  providers: [BService],
  exports: [BService],
})
export class BModule {}
