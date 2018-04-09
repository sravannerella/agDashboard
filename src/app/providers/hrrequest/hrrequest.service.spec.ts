import { TestBed, inject } from '@angular/core/testing';

import { HrrequestService } from './hrrequest.service';

describe('HrrequestService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HrrequestService]
    });
  });

  it('should be created', inject([HrrequestService], (service: HrrequestService) => {
    expect(service).toBeTruthy();
  }));
});
