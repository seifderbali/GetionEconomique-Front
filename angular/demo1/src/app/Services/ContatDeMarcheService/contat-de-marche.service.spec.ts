import { TestBed } from '@angular/core/testing';

import { ContatDeMarcheService } from './contat-de-marche.service';

describe('ContatDeMarcheService', () => {
  let service: ContatDeMarcheService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ContatDeMarcheService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
