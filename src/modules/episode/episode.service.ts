import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Episode } from "./entities/episode.entity";
import { Comment } from "../comment/entities/comment.entity";
import { CreateEpisodeDto } from "./dto/create-episode.dto";
import { ErrorHelper } from "src/utils/error-helper";
import { CreateCommentDto } from "../comment/dto/create-comment.dto";


@Injectable()
export class EpisodeService {
  constructor(
    @InjectRepository(Episode)
    private episodeRepo: Repository<Episode>,
    @InjectRepository(Comment)
    private commentRepo: Repository<Comment>
  ) { }

  async createEpisode(data: CreateEpisodeDto) {
    const episode = this.episodeRepo.create(data);
    return this.episodeRepo.save(episode);
  }

  async listEpisodes(): Promise<Episode[]> {
    const episodes = await this.episodeRepo.createQueryBuilder('episode')
      .leftJoinAndSelect('episode.episode_comments', 'comment')
      .loadRelationCountAndMap('episode.commentCount', 'episode.episode_comments')
      .orderBy('episode.release_date', 'ASC')
      .getMany();

    return episodes;
  }

  async findSingleEpisode(id: string): Promise<Episode> {
    const episode = await this.episodeRepo.findOne({
      where: {
        id
      },
      relations: ['episode_comments'],
    });

    if (!episode) {
      ErrorHelper.NotFoundException(`Episode with ID ${id} not found`);
    }

    return episode;
  }

  async addCommentToEpisode(episodeId: string, ip_address_location: string, createCommentDto: CreateCommentDto): Promise<Episode> {
    const episode = await this.episodeRepo.findOne({
      where: { id: episodeId },
      relations: ['episode_comments'],
    });

    if (!episode) {
      ErrorHelper.NotFoundException(`Episode with ID ${episodeId} not found`);
    }

    const comment = this.commentRepo.create({
      ...createCommentDto,
      episode,
      ip_address_location,
    });

    const savedComment = await this.commentRepo.save(comment);

    episode.episode_comments.push(savedComment);

    await this.episodeRepo.save(episode);

    return episode;
  }
}