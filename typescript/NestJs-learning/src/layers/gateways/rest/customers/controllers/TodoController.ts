import {
  Body,
  Controller,
  Delete,
  Get,
  NotImplementedException,
  Param,
  Post,
  Put,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import {
  ApiBearerAuth,
  ApiExtraModels,
  ApiOkResponse,
  ApiOperation,
  ApiQuery,
  ApiTags,
} from '@nestjs/swagger'
import { CreateTodoDto } from 'src/layers/contracts/dto/CreateTodoDto'
import { TodoDto } from 'src/layers/contracts/dto/TodoDto'
import { TodoService } from '../../../../domains/customers/service/TodoService'

@Controller('todo')
export class TodoController {
  constructor(private todosService: TodoService) {}

  @Post('')
  public async create(@Body() todoDto: TodoDto): Promise<any> {
    return this.todosService.create(todoDto)
  }

  @Get(':id')
  public async read(): Promise<any> {
    throw new NotImplementedException()
  }

  @Get('')
  public async list(): Promise<any> {
    return this.todosService.findAll()
  }

  @Put(':id')
  public async update(): Promise<any> {
    throw new NotImplementedException()
  }

  @Delete(':id')
  public async delete(): Promise<any> {
    throw new NotImplementedException()
  }
}
