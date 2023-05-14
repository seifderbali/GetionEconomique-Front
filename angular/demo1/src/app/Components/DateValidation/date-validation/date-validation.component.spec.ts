import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DateValidationComponent } from './date-validation.component';

describe('DateValidationComponent', () => {
  let component: DateValidationComponent;
  let fixture: ComponentFixture<DateValidationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DateValidationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DateValidationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
