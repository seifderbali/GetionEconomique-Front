import { TestBed } from '@angular/core/testing';

import { ComiteTechniqueService } from './comite-technique.service';

describe('ComiteTechniqueService', () => {
  let service: ComiteTechniqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ComiteTechniqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
