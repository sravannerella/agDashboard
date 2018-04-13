import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class EmployeesService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getEmployee() {
    return this.makeCall('employees');
  }

}
