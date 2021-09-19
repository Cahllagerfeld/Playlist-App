import { Inject, Injectable } from '@nestjs/common';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class SpotifyAuthService {
  constructor(@Inject('SPOTIFY_AUTH') private client: ClientProxy) {}

  async onApplicationBootstrap() {
    await this.client.connect();
  }

  public loginWithCode(code: string) {
    return this.client.send({ cmd: 'loginWithCode' }, { code });
  }
}
