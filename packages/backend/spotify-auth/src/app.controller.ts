import { Controller } from '@nestjs/common';
import { MessagePattern, Payload } from '@nestjs/microservices';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @MessagePattern('loginWithCode')
  async getNotifications(@Payload() code: string) {
    const tokenResponse = await this.appService.getTokenFromCode(code);
    const loggedInMail = await this.appService.getEmail(
      tokenResponse.access_token,
    );
    return { ...tokenResponse, ...{ profile: loggedInMail } };
  }
}
