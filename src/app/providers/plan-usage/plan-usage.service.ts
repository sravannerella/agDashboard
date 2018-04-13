import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class PlanUsageService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getPlanUsage() {
    return this.makeCall('planusage');
  }

}
