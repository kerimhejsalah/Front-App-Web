import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientFormsetudComponent } from './patient-formsetud.component';

describe('PatientFormsetudComponent', () => {
  let component: PatientFormsetudComponent;
  let fixture: ComponentFixture<PatientFormsetudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PatientFormsetudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientFormsetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
