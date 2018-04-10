import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class LeaveRequestsService {

  constructor(private http: HttpClient) { }

  public getLeaves() {
    const url = env.apiURL + 'leaves';
    return this.http.get(url);
  }

}
