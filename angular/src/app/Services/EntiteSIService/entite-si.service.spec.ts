import { TestBed } from '@angular/core/testing';

import { EntiteSIService } from './entite-si.service';

describe('EntiteSIService', () => {
  let service: EntiteSIService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EntiteSIService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
