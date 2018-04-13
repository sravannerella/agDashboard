import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class HrrequestService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getHrRequests() {
    return this.makeCall('hrrequests');
  }

}
