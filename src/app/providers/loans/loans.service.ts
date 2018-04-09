import { Injectable } from '@angular/core';
import { env } from '../../env';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class LoansService {

  constructor(private http: HttpClient) { }

  public getLoans() {
    const url = env.apiURL + 'loans';
    return this.http.get(url);
  }
}
