import { Module } from '@nestjs/common';
import { ClientsModule, Transport } from '@nestjs/microservices';
import { SpotifyAuthController } from './spotify-auth.controller';
import { SpotifyAuthService } from './spotify-auth.service';

@Module({
  imports: [
    ClientsModule.register([
      {
        name: 'SPOTIFY_AUTH',
        transport: Transport.RMQ,
        options: {
          urls: ['amqp://localhost:5672'],
          queue: 'spotify-auth',
          queueOptions: {
            durable: false,
          },
        },
      },
    ]),
  ],
  controllers: [SpotifyAuthController],
  providers: [SpotifyAuthService],
})
export class SpotifyAuthModule {}
