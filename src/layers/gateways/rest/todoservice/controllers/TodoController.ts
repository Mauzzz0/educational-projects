import {
  Controller,
  Get,
  NotImplementedException,
  Param,
  Put,
  Delete,
  Query,
  UseFilters,
  UseGuards,
  UseInterceptors,
} from '@nestjs/common'
import { ApiBearerAuth, ApiExtraModels, ApiOperation, ApiTags } from '@nestjs/swagger'
import { ApiErrorResponse } from 'src/common/swagger/decorators/ApiErrorResponse'
import { ApiOkResponse } from 'src/common/swagger/decorators/ApiOkResponse'
import { TodoDto } from 'src/layers/contracts/dto/todo/TodoDto'
import { TodoService } from 'src/layers/domain/todoservice/services/TodoService'
import { TagEnum } from '../types/TagEnum'

// @ApiBearerAuth()
// @UseFilters(HttpExceptionFilter)
@ApiExtraModels(TodoDto)
@ApiTags(TagEnum.Todo)
// @UseInterceptors(ResponseWithTrackingIdInterceptor)
// @UseGuards(AuthTokenGuard)
@Controller('todo')
export class TodoController {
  constructor(private readonly service: TodoService) {}

  @ApiOperation({ description: 'Get one todo by Id' })
  @ApiOkResponse(TodoDto)
  @ApiErrorResponse()
  @Get('/:id')
  public async getById(@Query('id') id: number): Promise<any> {
    throw new NotImplementedException()
  }

  @ApiOperation({ description: 'Create new todo' })
  @ApiOkResponse(TodoDto)
  @ApiErrorResponse()
  @Put('/create')
  public async create(): Promise<any> {
    throw new NotImplementedException()
  }

  @ApiOperation({ description: 'Remove one todo by Id' })
  @ApiOkResponse(TodoDto)
  @ApiErrorResponse()
  @Delete('/:id')
  public async removeById(@Query('id') id: number): Promise<any> {
    throw new NotImplementedException()
  }
}
