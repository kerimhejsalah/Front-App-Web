import { TestBed } from '@angular/core/testing';

import { AffectformetudserviceService } from './affectformetudservice.service';

describe('AffectformetudserviceService', () => {
  let service: AffectformetudserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AffectformetudserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
