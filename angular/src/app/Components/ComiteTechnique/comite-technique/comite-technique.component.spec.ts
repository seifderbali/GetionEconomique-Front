import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ComiteTechniqueComponent } from './comite-technique.component';

describe('ComiteTechniqueComponent', () => {
  let component: ComiteTechniqueComponent;
  let fixture: ComponentFixture<ComiteTechniqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ComiteTechniqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ComiteTechniqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
