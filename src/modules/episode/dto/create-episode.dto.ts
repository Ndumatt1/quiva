import { Type } from 'class-transformer';
import { IsString, IsNotEmpty, IsNumber, IsOptional, IsDate } from 'class-validator';

export class CreateEpisodeDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsDate()
  @Type(() => Date)
  release_date: Date;

  @IsString()
  episode_code: string;
}