import { Injectable } from '@nestjs/common'
import { TodoDto } from 'src/layers/contracts/dto/TodoDto'

@Injectable()
export class TodoService {
  private readonly todos: TodoDto[] = []

  create(todo: TodoDto) {
    this.todos.push(todo)
  }

  findAll(): TodoDto[] {
    return this.todos
  }
}
