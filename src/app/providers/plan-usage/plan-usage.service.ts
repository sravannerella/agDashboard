import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class PlanUsageService {

  constructor(private http: HttpClient) { }

  public getPlanUsage() {
    const url = env.apiURL + 'planusage';
    return this.http.get(url);
  }

}
