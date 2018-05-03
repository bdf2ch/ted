import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HourlyRateDialogComponent } from './hourly-rate-dialog.component';

describe('HourlyRateDialogComponent', () => {
  let component: HourlyRateDialogComponent;
  let fixture: ComponentFixture<HourlyRateDialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HourlyRateDialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HourlyRateDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
