import { TestBed } from '@angular/core/testing';

import { AuthlogService } from './authlog.service';

describe('AuthlogService', () => {
  let service: AuthlogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthlogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
