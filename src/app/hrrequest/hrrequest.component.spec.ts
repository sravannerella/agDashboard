import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HrrequestComponent } from './hrrequest.component';

describe('HrrequestComponent', () => {
  let component: HrrequestComponent;
  let fixture: ComponentFixture<HrrequestComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HrrequestComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HrrequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
