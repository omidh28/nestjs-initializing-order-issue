import { Module } from '@nestjs/common';
import { BModule } from '../b/b.module';
import { AService } from './a.service';

@Module({
  imports: [BModule],
  providers: [AService]
})
export class AModule {}
