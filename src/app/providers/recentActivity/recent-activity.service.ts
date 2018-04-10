import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { env } from '../../env';

@Injectable()
export class RecentActivityService {

  constructor(private http: HttpClient) { }
 
  getRecentActivity(): any {
    const url = env.apiURL + 'recentData';
    return this.http.get(url)
  }
}
