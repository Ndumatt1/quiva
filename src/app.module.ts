import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
// import { ConfigModule, ConfigService } from '@nestjs/config';
import { CharacterModule } from './modules/character/character.module';
import { EpisodeModule } from './modules/episode/episode.module';
// import { LocationModule } from './modules/location/location.module';
import { CommentModule } from './modules/comment/comment.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { DatabaseModule } from './database/database.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { LocationModule } from './modules/location/location.module';


@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      cache: true,
    }),
    CharacterModule,
    EpisodeModule,
    CommentModule,
    DatabaseModule,
    LocationModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
