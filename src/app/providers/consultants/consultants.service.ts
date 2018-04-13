import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class ConsultantsService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getConsultants() {
    return this.makeCall('consultants');
  }

}
