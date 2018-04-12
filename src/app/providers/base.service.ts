import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { env } from '../env';
import { Observable } from 'rxjs/Observable';

@Injectable()
export class BaseService {
    finalData;
    constructor(private http: HttpClient) {}

    makeCall(url) {
        if (localStorage.getItem(url) !== null && localStorage.getItem(url) !== undefined) {
            return JSON.parse(localStorage.getItem(url));
        }
        const callUrl = env.apiURL + url;
        return this.http.get(callUrl);
    }

}
