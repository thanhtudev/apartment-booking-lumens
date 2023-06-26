import { NestFactory } from '@nestjs/core';
import { ConfigService } from '@nestjs/config';
import { AppModule } from './modules/app/app.module';
import { SeedService} from './modules/seed/seed.service';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  const configService = app.get(ConfigService);
  const port = configService.get('PORT');
  const seedService = app.get(SeedService);
  await seedService.seedRoomsAndCustomers();

  await app.listen(port);
}
bootstrap();
