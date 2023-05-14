import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddComiteTechniqueComponent } from './add-comite-technique.component';

describe('AddComiteTechniqueComponent', () => {
  let component: AddComiteTechniqueComponent;
  let fixture: ComponentFixture<AddComiteTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddComiteTechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddComiteTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
