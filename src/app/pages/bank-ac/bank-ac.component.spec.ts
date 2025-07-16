import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BankAcComponent } from './bank-ac.component';

describe('BankAcComponent', () => {
  let component: BankAcComponent;
  let fixture: ComponentFixture<BankAcComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BankAcComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BankAcComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
