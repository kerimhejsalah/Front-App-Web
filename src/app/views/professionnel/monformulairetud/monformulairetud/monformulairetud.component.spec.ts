import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MonformulairetudComponent } from './monformulairetud.component';

describe('MonformulairetudComponent', () => {
  let component: MonformulairetudComponent;
  let fixture: ComponentFixture<MonformulairetudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MonformulairetudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MonformulairetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
