import { Module } from '@nestjs/common'
import { TodoController } from 'src/layers/gateways/rest/customers/controllers/TodoController'
import { TodoService } from '../service/TodoService'

@Module({
  controllers: [TodoController],
  providers: [TodoService],
})
export class TodoModule {}
