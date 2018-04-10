import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class DashboardService {

  constructor(private http: HttpClient) { }

  public getOrder() {
    const url = env.apiURL + 'dashboard';
    return this.http.get(url);
  }

}
