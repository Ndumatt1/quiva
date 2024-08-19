import { Controller, Get, Query, Param, Post, Body } from '@nestjs/common';
import { CharacterService } from './character.service';
// import { Episode } from './entities/episode.entity';
import { HttpResponse } from 'src/utils/http-response.utils';
import { CreateCharacterDto } from './dto/create-character.dto';
import { ListCharacterDto } from './dto/list-character.dto';

@Controller('characters')
export class CharacterController {
  constructor(private readonly characterService: CharacterService) { }

  @Get()
  async findAll(
    @Query() query: ListCharacterDto
  ) {
    const data = await this.characterService.listCharacter(query);
    return HttpResponse.success({ data, message: 'Characters fetched successfully' });
  }

  @Post('create')
  async createCharacter(@Body() data: CreateCharacterDto) {
    const character = await this.characterService.createCharacter(data);
    return HttpResponse.success({ data: character, message: 'Character created successfully' });
  }

  @Get('search')
  async searchEpisodeForCharacter(
    @Query('name') name: string,
  ) {
    const episodes = await this.characterService.searchEpisodeForCharacter(name);
    return HttpResponse.success({ data: episodes, message: 'Episodes fetched successfully' });
  }
}