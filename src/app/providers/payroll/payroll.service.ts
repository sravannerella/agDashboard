import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { env } from '../../env';

@Injectable()
export class PayrollService {

  constructor(private http: HttpClient) { }
  
  getPayrollSummary(): any {
    const url = env.apiURL + 'payroll';
    return this.http.get(url)
  }

  getBatchSummary(): any {
    const url = env.apiURL + 'batchSummary';
    return this.http.get(url)
  }
}
