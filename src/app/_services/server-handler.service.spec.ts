import { TestBed } from '@angular/core/testing';

import { ServerHandlerService } from './server-handler.service';

describe('ServerHandlerService', () => {
  let service: ServerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
