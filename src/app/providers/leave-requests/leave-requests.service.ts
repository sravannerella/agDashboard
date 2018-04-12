import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';
import { BaseService } from '../base.service';

@Injectable()
export class LeaveRequestsService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getLeaves() {
    return this.makeCall('leaves');
  }

}
