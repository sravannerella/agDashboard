import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class TimesheetsService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getTimesheets() {
    return this.makeCall('timesheets');
  }

}
