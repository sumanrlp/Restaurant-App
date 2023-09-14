import { TestBed } from '@angular/core/testing';

import { ReqLoginService } from './req-login.service';

describe('ReqLoginService', () => {
  let service: ReqLoginService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ReqLoginService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
