import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class HrrequestService {

  constructor(private http: HttpClient) { }

  public getHrRequests() {
    const url = env.apiURL + 'hrrequests';
    return this.http.get(url);
  }

}
