import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.enableCors({
    origin: 'http://localhost:5173', // Адрес фронтенда
    credentials: true,
  });
  await app.listen(4000); // Убедитесь, что порт соответствует вашему запросу
}
bootstrap();
