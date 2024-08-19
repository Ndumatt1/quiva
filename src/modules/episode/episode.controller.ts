import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { EpisodeService } from './episode.service';
import { HttpResponse } from 'src/utils/http-response.utils';
import { CreateCommentDto } from '../comment/dto/create-comment.dto';
import { CreateEpisodeDto } from './dto/create-episode.dto';
import { IpAddress } from 'src/decorators/request-ip.helper';

@Controller('episodes')
export class EpisodeController {
  constructor(private readonly episodeService: EpisodeService) { }


  @Post()
  async createEpisode(@Body() data: CreateEpisodeDto) {
    const res = await this.episodeService.createEpisode(data);
    return HttpResponse.success({ data: res, message: 'Episode created successfully' });
  }

  @Get()
  async findAll(): Promise<any[]> {
    return this.episodeService.listEpisodes();
  }

  @Get(':id')
  async findSingleEpisode(@Param('id') id: string) {
    const epdisode = await this.episodeService.findSingleEpisode(id);
    return HttpResponse.success({ data: epdisode, message: 'Episode fetched successfully' });
  }

  @Post(':id/comments')
  async addCommentToEpisode(@Param('id') episodeId: string, @IpAddress() IpAddress: string, @Body() createCommentDto: CreateCommentDto) {
    const data = await this.episodeService.addCommentToEpisode(episodeId, IpAddress, createCommentDto);
    return HttpResponse.success({ data, message: 'Comment added successfully' });
  }
}
