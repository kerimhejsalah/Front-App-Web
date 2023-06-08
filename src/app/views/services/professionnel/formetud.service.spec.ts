import { TestBed } from '@angular/core/testing';

import { FormetudService } from './formetud.service';

describe('FormetudService', () => {
  let service: FormetudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FormetudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
