import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class InvoiceService {

  constructor(private http: HttpClient) { }

  public getInvoices() {
    const url = env.apiURL + 'invoices';
    return this.http.get(url);
  }

}
