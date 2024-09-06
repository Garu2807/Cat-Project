import { HttpService } from '@nestjs/axios';
import { Injectable } from '@nestjs/common';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  findAll(): Observable<any> {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=100';

    const headers = {
      'x-api-key': 'API_KEY', // Замените YOUR_API_KEY на ваш реальный API-ключ
      'Content-Type': 'application/json',
    };
    return this.httpService
      .get(url, { headers })
      .pipe(map(response => response.data));
  }
}
