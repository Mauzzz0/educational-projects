import { Module } from '@nestjs/common'
import { AppService } from './app.service'
import { TodoController } from './layers/gateways/rest/customers/controllers/TodoController'

@Module({
  imports: [],
  controllers: [TodoController],
  providers: [AppService],
})
export class AppModule {}
