import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContratDeMarcheComponent } from './contrat-de-marche.component';

describe('ContratDeMarcheComponent', () => {
  let component: ContratDeMarcheComponent;
  let fixture: ComponentFixture<ContratDeMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ContratDeMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ContratDeMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
