import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaialBalanceReportComponent } from './taial-balance-report.component';

describe('TaialBalanceReportComponent', () => {
  let component: TaialBalanceReportComponent;
  let fixture: ComponentFixture<TaialBalanceReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TaialBalanceReportComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaialBalanceReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
