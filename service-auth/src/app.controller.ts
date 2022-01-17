import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { of } from 'rxjs';
import { delay } from 'rxjs/operators';

@Controller()
export class AppController {
  @MessagePattern('ping')
  ping(_: any) {
    return of('pong').pipe(delay(2000));
  }

  @MessagePattern('verify')
  verify(_: any) {
    return of('User verification successfull!').pipe(delay(2000));
  }

  @MessagePattern('refresh')
  refreshToken(_: any) {
    return of('Access Token Updated').pipe(delay(2000));
  }
}
