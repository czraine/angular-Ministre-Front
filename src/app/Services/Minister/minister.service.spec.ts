import { TestBed } from '@angular/core/testing';

import { MinisterService } from './minister.service';

describe('MinisterService', () => {
  let service: MinisterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinisterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
