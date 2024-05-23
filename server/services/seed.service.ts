import { Injectable } from '@nestjs/common';

@Injectable()
export class SeedService {
  async run() {
    console.log('seed started');

    try {
      // TODO: implement seeder functionality
    } catch (err) {
      console.log('executing seeder error');
    }

    console.log('seed ended');
  }
}
