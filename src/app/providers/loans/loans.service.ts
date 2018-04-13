import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class LoansService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getLoans() {
    return this.makeCall('loans');
  }
}
