import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class SavingsService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getSavings() {
    return this.makeCall('savings');
  }

}
