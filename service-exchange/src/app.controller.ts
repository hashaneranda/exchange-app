import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller()
export class AppController {
  @MessagePattern('ping')
  ping(_: any) {
    return of('pong').pipe(delay(1000));
  }
  @MessagePattern('search')
  search(_: any) {
    return of('0 result found for your query').pipe(delay(1000));
  }
  @MessagePattern('rate')
  rate(_: any) {
    return of('Current BTC rate is 100x').pipe(delay(1000));
  }
}
