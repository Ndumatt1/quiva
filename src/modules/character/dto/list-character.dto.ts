import { IsEnum, IsOptional, IsString, IsIn } from 'class-validator';

export class ListCharacterDto {
  @IsString()
  @IsOptional()
  @IsIn(['first_name', 'last_name', 'gender'], {
    message: `sort must be one of the following values: 'first_name', 'last_name', 'gender'`
  })
  sort: string = 'first_name';

  @IsEnum(['ASC', 'DESC'], {
    message: `order must be either 'ASC' or 'DESC'`
  })
  @IsOptional()
  order: 'ASC' | 'DESC' = 'ASC';

  @IsString()
  @IsOptional()
  @IsIn(['MALE', 'FEMALE'], {
    message: `gender must be one of the following values: 'MALE', 'FEMALE'`
  })
  gender?: string;

  @IsString()
  @IsOptional()
  @IsEnum(['ALIVE', 'DEAD', 'UNKNOWN'], {
    message: `status must be one of the following values: 'ALIVE', 'DEAD', 'UNKNOWN'`
  })
  filterStatus?: string;

  @IsString()
  @IsOptional()
  location?: string;
}
