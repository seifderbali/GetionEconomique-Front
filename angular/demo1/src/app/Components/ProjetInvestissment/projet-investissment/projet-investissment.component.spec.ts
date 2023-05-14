import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjetInvestissmentComponent } from './projet-investissment.component';

describe('ProjetInvestissmentComponent', () => {
  let component: ProjetInvestissmentComponent;
  let fixture: ComponentFixture<ProjetInvestissmentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjetInvestissmentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjetInvestissmentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
