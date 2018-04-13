import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class InvoiceService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  public getInvoices() {
    return this.makeCall('invoices');
  }

}
