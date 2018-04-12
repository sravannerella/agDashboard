import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';
import { BaseService } from '../base.service';

@Injectable()
export class InvoiceService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getInvoices() {
    return this.makeCall('invoices');
  }

}
