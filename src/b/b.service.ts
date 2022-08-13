import { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class BService implements OnModuleInit {
  onModuleInit() {
    console.log('Service B initilized');
  }
}
