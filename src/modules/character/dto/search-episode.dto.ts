import { IsString, IsNotEmpty } from "class-validator";

export class SearchEpisodeDto {
  @IsString()
  @IsNotEmpty()
  name: string;
}