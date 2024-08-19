import { IsArray, IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { CharacterStatus, Gender } from "src/enums";

export class CreateCharacterDto {
  @IsString()
  @IsNotEmpty()
  first_name: string;

  @IsString()
  @IsNotEmpty()
  last_name: string;

  @IsString()
  @IsNotEmpty()
  state_of_origin: string;

  @IsEnum(CharacterStatus, {
    message: `status must be one of the following values: ${Object.values(CharacterStatus)}`,
  })
  @IsNotEmpty()
  status: string;

  @IsEnum(Gender, {
    message: `gender must be one of the following values: ${Object.values(Gender)}`,
  })
  gender: string;

  @IsString()
  @IsNotEmpty()
  @IsOptional()
  locationId: string;

  @IsArray()
  @IsNotEmpty()
  @IsOptional()
  episode: string[];
}
