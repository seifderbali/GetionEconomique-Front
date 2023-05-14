import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContratDeMarcheComponent } from './add-contrat-de-marche.component';

describe('AddContratDeMarcheComponent', () => {
  let component: AddContratDeMarcheComponent;
  let fixture: ComponentFixture<AddContratDeMarcheComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddContratDeMarcheComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddContratDeMarcheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
