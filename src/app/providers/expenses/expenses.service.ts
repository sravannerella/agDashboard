import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class ExpensesService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getExpenses() {
    return this.makeCall('expenses');
  }

}
