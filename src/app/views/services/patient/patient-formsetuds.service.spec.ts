import { TestBed } from '@angular/core/testing';

import { PatientFormsetudsService } from './patient-formsetuds.service';

describe('PatientFormsetudsService', () => {
  let service: PatientFormsetudsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientFormsetudsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
