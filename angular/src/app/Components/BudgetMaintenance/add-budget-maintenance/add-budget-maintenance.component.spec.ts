import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddBudgetMaintenanceComponent } from './add-budget-maintenance.component';

describe('AddBudgetMaintenanceComponent', () => {
  let component: AddBudgetMaintenanceComponent;
  let fixture: ComponentFixture<AddBudgetMaintenanceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddBudgetMaintenanceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddBudgetMaintenanceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
