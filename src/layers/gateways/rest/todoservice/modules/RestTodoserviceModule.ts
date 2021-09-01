import { Module, NestModule } from '@nestjs/common'
import { TodoController } from '../controllers/TodoController'

import { MiddlewareConsumer } from '@nestjs/common'

const controllers = [TodoController]

const providers = []

@Module({
  imports: [],
  controllers: controllers,
  providers: [...providers],
})
export class RestTodoserviceModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply().forRoutes('*')
  }
}
