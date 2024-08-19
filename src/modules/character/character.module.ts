import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Character } from './entities/character.entity';
import { CharacterService } from './character.service';
import { CharacterController } from './character.controller';
import { Episode } from '../episode/entities/episode.entity';
import { Location } from '../location/entities/location.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Character, Episode, Location])],
  providers: [CharacterService],
  controllers: [CharacterController],
  exports: [CharacterService],
})
export class CharacterModule { }
