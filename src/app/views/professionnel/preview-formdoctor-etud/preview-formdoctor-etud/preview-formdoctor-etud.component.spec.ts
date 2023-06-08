import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewFormdoctorEtudComponent } from './preview-formdoctor-etud.component';

describe('PreviewFormdoctorEtudComponent', () => {
  let component: PreviewFormdoctorEtudComponent;
  let fixture: ComponentFixture<PreviewFormdoctorEtudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewFormdoctorEtudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewFormdoctorEtudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
