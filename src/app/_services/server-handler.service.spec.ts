import { TestBed } from '@angular/core/testing';

import { AuthServerHandlerService } from './auth-server-handler.service';

describe('AuthServerHandlerService', () => {
  let service: AuthServerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AuthServerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
