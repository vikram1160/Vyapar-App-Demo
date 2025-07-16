import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GoReportComponent } from './go-report.component';

describe('GoReportComponent', () => {
  let component: GoReportComponent;
  let fixture: ComponentFixture<GoReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GoReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GoReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
