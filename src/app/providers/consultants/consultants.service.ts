import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../../env';

@Injectable()
export class ConsultantsService {

  constructor(private http: HttpClient) { }

  public getConsultants() {
    const url = env.apiURL + 'consultants';
    return this.http.get(url);
  }

}
