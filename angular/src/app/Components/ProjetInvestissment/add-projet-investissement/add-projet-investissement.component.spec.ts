import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddProjetInvestissementComponent } from './add-projet-investissement.component';

describe('AddProjetInvestissementComponent', () => {
  let component: AddProjetInvestissementComponent;
  let fixture: ComponentFixture<AddProjetInvestissementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddProjetInvestissementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddProjetInvestissementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
