import { TestBed } from '@angular/core/testing';

import { ProjetInvestissmentService } from './projet-investissment.service';

describe('ProjetInvestissmentService', () => {
  let service: ProjetInvestissmentService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProjetInvestissmentService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
