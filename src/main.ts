import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors(); //permite la cmunicación entre apps
  await app.listen(parseInt(process.env.PORT) || 4000); 
}
bootstrap();
