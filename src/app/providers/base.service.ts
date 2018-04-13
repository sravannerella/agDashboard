import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import { CacheService } from './cache.service';

@Injectable()
export class BaseService {

    constructor(private cache: CacheService) {}

    makeCall(url) {
        return this.cache.get(url);
    }

}
