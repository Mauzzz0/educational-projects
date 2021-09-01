import {
  IsArray,
  IsEmail,
  IsInt,
  IsOptional,
  IsString,
  MinLength,
  ValidateNested,
} from 'class-validator'
import { ApiProperty } from '@nestjs/swagger'
// import { Type } from 'class-transformer'
// import { CustomerUserDataDto } from './CustomerUserDataDto'

export class TodoDto {
  @ApiProperty()
  @IsInt()
  public readonly id: string

  @ApiProperty()
  @IsString()
  @MinLength(4)
  public readonly title: string

  @ApiProperty()
  @IsString()
  @MinLength(4)
  public readonly description: string
}
