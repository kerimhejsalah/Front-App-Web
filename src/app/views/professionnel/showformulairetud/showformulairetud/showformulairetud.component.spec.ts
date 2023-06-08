import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowformulairetudComponent } from './showformulairetud.component';

describe('ShowformulairetudComponent', () => {
  let component: ShowformulairetudComponent;
  let fixture: ComponentFixture<ShowformulairetudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowformulairetudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowformulairetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
