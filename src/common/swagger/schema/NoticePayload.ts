import { ApiProperty } from '@nestjs/swagger'
//TODO: сюда енамка еррор стрингов

export class NoticePayload {
  @ApiProperty()
  message: string

  @ApiProperty()
  code: string
}
