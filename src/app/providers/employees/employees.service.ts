import { Injectable } from '@angular/core';
import { BaseService } from '../base.service';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class EmployeesService extends BaseService {

  constructor(http: HttpClient) {
    super(http);
  }

  public getEmployee() {
    return this.makeCall('employees');
  }

}
