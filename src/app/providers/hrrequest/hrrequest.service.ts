import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class HrrequestService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getHrRequests() {
    return this.makeCall('hrrequests');
  }

}
