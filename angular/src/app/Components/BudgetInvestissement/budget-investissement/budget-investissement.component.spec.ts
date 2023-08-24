import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetInvestissementComponent } from './budget-investissement.component';

describe('BudgetInvestissementComponent', () => {
  let component: BudgetInvestissementComponent;
  let fixture: ComponentFixture<BudgetInvestissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetInvestissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetInvestissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
