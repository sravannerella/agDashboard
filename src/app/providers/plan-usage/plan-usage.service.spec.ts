import { TestBed, inject } from '@angular/core/testing';

import { PlanUsageService } from './plan-usage.service';

describe('PlanUsageService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PlanUsageService]
    });
  });

  it('should be created', inject([PlanUsageService], (service: PlanUsageService) => {
    expect(service).toBeTruthy();
  }));
});
