import { TestBed } from '@angular/core/testing';

import { MapServerHandlerService } from './map-server-handler.service';

describe('MapServerHandlerService', () => {
  let service: MapServerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MapServerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
