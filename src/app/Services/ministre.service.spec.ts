import { TestBed } from '@angular/core/testing';

import { MinistreService } from './ministre.service';

describe('MinistreService', () => {
  let service: MinistreService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MinistreService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
