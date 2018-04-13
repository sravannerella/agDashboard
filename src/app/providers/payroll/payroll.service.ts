import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class PayrollService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  getPayrollSummary(): any {
    return this.makeCall('payroll');
  }

  getBatchSummary(): any {
    return this.makeCall('batchSummary');
  }
}
