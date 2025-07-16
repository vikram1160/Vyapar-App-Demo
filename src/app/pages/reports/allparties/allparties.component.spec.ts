import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllpartiesComponent } from './allparties.component';

describe('AllpartiesComponent', () => {
  let component: AllpartiesComponent;
  let fixture: ComponentFixture<AllpartiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AllpartiesComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AllpartiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
