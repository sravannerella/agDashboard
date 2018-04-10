import { Injectable } from '@angular/core';
import { env } from '../../env';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TimesheetsService {

  constructor(private http: HttpClient) { }

  public getTimesheets() {
    const url = env.apiURL + 'timesheets';
    return this.http.get(url);
  }

}
