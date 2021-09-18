import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SpotifyAuthModule } from './spotify-auth/spotify-auth.module';

@Module({
  imports: [SpotifyAuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
