import { TestBed } from '@angular/core/testing';

import { BlogHandlerService } from './blog-handler.service';

describe('BlogHandlerService', () => {
  let service: BlogHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BlogHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
