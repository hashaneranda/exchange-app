import { Controller, Get, Post } from '@nestjs/common';
import { AppService } from './app.service';
import { zip } from 'rxjs';
import { map } from 'rxjs/operators';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  // service A - Exchange
  @Get('/exchange/ping')
  pingServiceA() {
    return this.appService.pingServiceA('ping');
  }
  @Get('/exchange/search')
  search() {
    return this.appService.pingServiceA('search');
  }
  @Get('/exchange/rate')
  rate() {
    return this.appService.pingServiceA('rate');
  }

  // service B - Auth
  @Get('/auth/ping')
  pingServiceB() {
    return this.appService.pingServiceB('ping');
  }

  @Post('/auth/verify')
  verifyUser() {
    return this.appService.pingServiceB('verify');
  }

  @Post('/auth/refresh')
  refreshToken() {
    return this.appService.pingServiceB('refresh');
  }

  @Get('/ping')
  pingAll() {
    return zip(
      this.appService.pingServiceA('ping'),
      this.appService.pingServiceB('ping'),
    ).pipe(
      map(([pongServiceA, pongServiceB]) => ({
        pongServiceA,
        pongServiceB,
      })),
    );
  }
}
