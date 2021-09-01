import { NestFactory } from '@nestjs/core'
import { AppModule } from './main/AppModule'
import { setupSwagger } from './common/swagger/helpers/setupSwagger'

async function bootstrap() {
  const app = await NestFactory.create(AppModule)
  setupSwagger(app)

  await app.listen(3000)
}
bootstrap()
