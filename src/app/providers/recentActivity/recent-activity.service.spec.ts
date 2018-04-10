import { TestBed, inject } from '@angular/core/testing';

import { RecentActivityService } from './recent-activity.service';

describe('RecentActivityService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RecentActivityService]
    });
  });

  it('should be created', inject([RecentActivityService], (service: RecentActivityService) => {
    expect(service).toBeTruthy();
  }));
});
