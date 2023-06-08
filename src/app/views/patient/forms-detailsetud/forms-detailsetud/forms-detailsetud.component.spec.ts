import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormsDetailsetudComponent } from './forms-detailsetud.component';

describe('FormsDetailsetudComponent', () => {
  let component: FormsDetailsetudComponent;
  let fixture: ComponentFixture<FormsDetailsetudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormsDetailsetudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormsDetailsetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
