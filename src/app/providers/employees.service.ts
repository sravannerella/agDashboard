import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { Card } from '../card/card';
import 'rxjs/add/operator/map';
import { env } from '../env';

@Injectable()
export class EmployeesService {

  constructor(private http: HttpClient) { }

  public getEmployee() {
    const url = env.apiURL + 'employees';
    return this.http.get(url);
  }

}
