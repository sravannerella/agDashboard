import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class SavingsService {

  constructor(private http: HttpClient) { }

  public getSavings() {
    const url = env.apiURL + 'savings';
    return this.http.get(url);
  }

}
