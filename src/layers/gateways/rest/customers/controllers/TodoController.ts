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

@Controller('todo')
export class TodoController {
  @Post('')
  public async create(@Body() createTodoDto: CreateTodoDto): Promise<any> {
    throw new NotImplementedException()
  }

  @Get(':id')
  public async read(): Promise<any> {
    throw new NotImplementedException()
  }

  @Get('')
  public async list(): Promise<any> {
    throw new NotImplementedException()
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
