import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddEntiteSIComponent } from './add-entite-si.component';

describe('AddEntiteSIComponent', () => {
  let component: AddEntiteSIComponent;
  let fixture: ComponentFixture<AddEntiteSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddEntiteSIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddEntiteSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
