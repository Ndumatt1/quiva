import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Episode } from './entities/episode.entity';
import { EpisodeService } from './episode.service';
import { EpisodeController } from './episode.controller';
import { Comment } from '../comment/entities/comment.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Episode, Comment])],
  providers: [EpisodeService],
  controllers: [EpisodeController],
  exports: [EpisodeService],
})
export class EpisodeModule { }
