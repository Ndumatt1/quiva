import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateLocationDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsNumber()
  @IsNotEmpty()
  latitude: string;

  @IsNumber()
  @IsNotEmpty()
  longitude: string;
}