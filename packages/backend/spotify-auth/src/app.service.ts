import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import SpotifyWebApi from 'spotify-web-api-node';

@Injectable()
export class AppService {
  constructor(private readonly config: ConfigService) {}

  public async getTokenFromCode(code: string) {
    const spotify = new SpotifyWebApi({
      clientId: this.config.get('SPOTIFY_CLIENT_ID'),
      clientSecret: this.config.get('SPOTIFY_CLIENT_SECRET'),
      redirectUri: this.config.get('SPOTIFY_REDIRECT_URI'),
    });
    const accessToken = await spotify.authorizationCodeGrant(code);

    return { ...accessToken.body };
  }

  public async getEmail(accessToken: string) {
    const spotify = new SpotifyWebApi({
      accessToken,
    });

    const profile = await spotify.getMe();

    return profile.body.email;
  }
}
