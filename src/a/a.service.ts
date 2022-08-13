import { OnModuleInit } from '@nestjs/common';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AService implements OnModuleInit {

  onModuleInit() {
    console.log('Service A initilized');
  }
}
