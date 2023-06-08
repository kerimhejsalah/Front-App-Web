import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactPatientetudComponent } from './contact-patientetud.component';

describe('ContactPatientetudComponent', () => {
  let component: ContactPatientetudComponent;
  let fixture: ComponentFixture<ContactPatientetudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactPatientetudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactPatientetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
