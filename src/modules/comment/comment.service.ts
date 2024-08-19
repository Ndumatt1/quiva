import { Injectable } from "@nestjs/common";
import { InjectRepository } from "@nestjs/typeorm";
import { Repository } from "typeorm";
import { Comment } from "./entities/comment.entity";
import { CreateCommentDto } from "./dto/create-comment.dto";
import { Episode } from "../episode/entities/episode.entity";
import { ErrorHelper } from "src/utils/error-helper";


@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Episode)
    private episodeRepo: Repository<Episode>,
    @InjectRepository(Comment)
    private commentRepo: Repository<Comment>
  ) { }

  async listComments(): Promise<any[]> {
    return await this.commentRepo.createQueryBuilder('comment')
      .select(['comment.comment', 'comment.ip_address_location', 'comment.createdAt'])
      .orderBy('comment.createdAt', 'DESC')
      .getMany();
  }
}