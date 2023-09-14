import { TestBed } from '@angular/core/testing';

import { ReqSignupService } from './req-signup.service';

describe('ReqSignupService', () => {
  let service: ReqSignupService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqSignupService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
