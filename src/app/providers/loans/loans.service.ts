import { Injectable } from '@angular/core';
import { env } from '../../env';
import { HttpClient } from '@angular/common/http';
import { BaseService } from '../base.service';

@Injectable()
export class LoansService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getLoans() {
    return this.makeCall('loans');
  }
}
