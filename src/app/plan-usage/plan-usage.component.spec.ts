import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanUsageComponent } from './plan-usage.component';

describe('PlanUsageComponent', () => {
  let component: PlanUsageComponent;
  let fixture: ComponentFixture<PlanUsageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanUsageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanUsageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
