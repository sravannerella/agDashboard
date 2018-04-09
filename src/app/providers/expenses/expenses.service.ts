import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class ExpensesService {

  constructor(private http: HttpClient) {}

  public getExpenses() {
    const url = env.apiURL + 'expenses';
    return this.http.get(url);
  }

}
