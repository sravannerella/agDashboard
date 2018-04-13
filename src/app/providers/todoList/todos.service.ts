import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { BaseService } from '../base.service';
import { CacheService } from '../cache.service';

@Injectable()
export class TodosService extends BaseService {

  constructor(cache: CacheService) {
    super(cache);
  }

  getTodoList() {
    return this.makeCall('todos');
  }
}
