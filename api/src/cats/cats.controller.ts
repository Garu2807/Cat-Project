import { Controller, Get } from '@nestjs/common';
import { CatsService } from './cats.service';
import { Observable } from 'rxjs';
import { Cat } from './cats.service';

@Controller('cats')
export class CatsController {
  constructor(private readonly catsService: CatsService) {}

  @Get()
  getCats(): Observable<Cat[]> {
    return this.catsService.getCats();
  }
}
