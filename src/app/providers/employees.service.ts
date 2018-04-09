import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Card } from '../card/card';
import 'rxjs/add/operator/map';
import { env } from '../env';

@Injectable()
export class EmployeesService {

  constructor(private http: Http) { }

  public getEmployee() {
    const url = env.apiURL + 'employees';
    return this.http.get(url).map( (resp: Response) => {
      resp.json();
      // console.log('RESPONSE: ', resp.json());
    });
  }

}
