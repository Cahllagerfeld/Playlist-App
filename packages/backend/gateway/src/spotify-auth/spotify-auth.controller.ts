import { Body, Controller, Post } from '@nestjs/common';
import { SpotifyAuthService } from './spotify-auth.service';

@Controller('spotify-auth')
export class SpotifyAuthController {
  constructor(private readonly service: SpotifyAuthService) {}
  @Post('login')
  async loginSpotify(@Body() body: { code: string }) {
    return this.service.loginWithCode(body.code);
  }
}
