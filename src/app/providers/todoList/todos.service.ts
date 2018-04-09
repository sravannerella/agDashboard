import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { env } from '../../env';

@Injectable()
export class TodosService {

  constructor(private http: HttpClient) { }

  getTodoList(): any {
    const url = env.apiURL + 'todos';
    return this.http.get(url)
  }
}
