import { TestBed } from '@angular/core/testing';

import { PatientFormsetudService } from './patient-formsetud.service';

describe('PatientFormsetudService', () => {
  let service: PatientFormsetudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PatientFormsetudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
