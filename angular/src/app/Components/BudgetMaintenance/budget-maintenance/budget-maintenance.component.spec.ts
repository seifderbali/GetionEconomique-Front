import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BudgetMaintenanceComponent } from './budget-maintenance.component';

describe('BudgetMaintenanceComponent', () => {
  let component: BudgetMaintenanceComponent;
  let fixture: ComponentFixture<BudgetMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BudgetMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BudgetMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
