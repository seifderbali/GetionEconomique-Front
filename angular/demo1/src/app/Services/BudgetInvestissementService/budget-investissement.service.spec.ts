import { TestBed } from '@angular/core/testing';

import { BudgetInvestissementService } from './budget-investissement.service';

describe('BudgetInvestissementService', () => {
  let service: BudgetInvestissementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BudgetInvestissementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
