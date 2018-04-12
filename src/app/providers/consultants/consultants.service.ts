import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConsultantsService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getConsultants() {
    return this.makeCall('consultants');
  }

}
