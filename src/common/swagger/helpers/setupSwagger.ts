import { INestApplication } from '@nestjs/common'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import { NoticePayload } from '../schema/NoticePayload'
import { DeletedObjectPayload } from '../schema/DeletedObjectPayload'

export const setupSwagger = (app: INestApplication) => {
  const config = new DocumentBuilder()
    .setTitle('Todo App API')
    .setDescription('API for users')
    .setVersion('1.0')
    .addBearerAuth()
    .build()

  const document = SwaggerModule.createDocument(app, config, {
    extraModels: [NoticePayload, DeletedObjectPayload],
  })

  SwaggerModule.setup('api', app, document)
}
