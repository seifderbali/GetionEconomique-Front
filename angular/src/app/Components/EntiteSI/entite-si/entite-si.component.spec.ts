import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EntiteSIComponent } from './entite-si.component';

describe('EntiteSIComponent', () => {
  let component: EntiteSIComponent;
  let fixture: ComponentFixture<EntiteSIComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EntiteSIComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EntiteSIComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
