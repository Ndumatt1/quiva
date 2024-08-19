import { Controller, Get } from '@nestjs/common';
import { CommentService } from './comment.service';
import { HttpResponse } from 'src/utils/http-response.utils';
// import { CreateCommentDto } from './dto/create-comment.dto';

@Controller('comments')
export class CommentController {
  constructor(private readonly commentService: CommentService) { }

  @Get()
  async findAll() {
    const data = await this.commentService.listComments();
    return HttpResponse.success({ data, message: 'Comments fetched successfully' });
  }
}
