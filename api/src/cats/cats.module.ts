import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios';
import { CatsService } from './cats.service';
import { CatsController } from './cats.controller';

@Module({
  imports: [HttpModule],
  providers: [CatsService],
  controllers: [CatsController],
})
export class CatsModule {}
