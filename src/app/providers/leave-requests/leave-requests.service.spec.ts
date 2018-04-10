import { TestBed, inject } from '@angular/core/testing';

import { LeaveRequestsService } from './leave-requests.service';

describe('LeaveRequestsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [LeaveRequestsService]
    });
  });

  it('should be created', inject([LeaveRequestsService], (service: LeaveRequestsService) => {
    expect(service).toBeTruthy();
  }));
});
