import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class LeaveRequestsService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getLeaves() {
    return this.makeCall('leaves');
  }

}
