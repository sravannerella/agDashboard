import { Injectable } from '@angular/core';
import { env } from '../../env';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';

@Injectable()
export class TimesheetsService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getTimesheets() {
    return this.makeCall('timesheets');
  }

}
