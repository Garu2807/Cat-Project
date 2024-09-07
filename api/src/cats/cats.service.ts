import { Injectable } from '@nestjs/common';
import { HttpService } from '@nestjs/axios';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

export interface Cat {
  id: string;
  url: string;
}

@Injectable()
export class CatsService {
  constructor(private readonly httpService: HttpService) {}

  getCats(): Observable<Cat[]> {
    const url = 'https://api.thecatapi.com/v1/images/search?limit=15';
    const headers = {
      'x-api-key': process.env.API_KEY,
      'Content-Type': 'application/json',
    };

    return this.httpService
      .get<Cat[]>(url, { headers })
      .pipe(map(response => response.data));
  }
}
