import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { env } from '../../env';
import { BaseService } from '../base.service';

@Injectable()
export class RecentActivityService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  getRecentActivity(): any {
    return this.makeCall('recentData');
  }

}
