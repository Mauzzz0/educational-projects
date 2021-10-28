import { Module } from '@nestjs/common'
import { TodoModule } from './layers/domains/customers/modules/TodoModule'

@Module({
  imports: [TodoModule],
})
export class AppModule {}
