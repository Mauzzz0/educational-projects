import { Module } from '@nestjs/common'
import { RestTodoserviceModule } from '../layers/gateways/rest/todoservice/modules/RestTodoserviceModule'
@Module({
  imports: [RestTodoserviceModule],
  providers: [],
})
export class AppModule {}
