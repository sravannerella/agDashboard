import { Observable } from 'rxjs/Observable';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { env } from '../env';

interface CacheData {
    expiryTime: number;
    data: any;
}

@Injectable()
export class CacheService {

    private cache: Map<string, CacheData> = new Map<string, CacheData>();
    readonly maxAge: number = 40000;

    constructor(private http: HttpClient) {}

    // Get the key
    get(key: string): Observable<any> {
        if (this.cache.has(key) && !((this.cache.get(key).expiryTime) < Date.now() ) ) {
            const time = Date.now();
            return this.cache.get(key).data;
        } else {
            const url = env.apiURL + key;
            const data = this.http.get(url);
            this.set(key, data);
            return data;
        }
    }

    // Set the Key
    set(key: string, value: any) {
        this.cache.set( key,
            {
                data: value,
                expiryTime: Date.now() + this.maxAge
            }
        );
    }

}
