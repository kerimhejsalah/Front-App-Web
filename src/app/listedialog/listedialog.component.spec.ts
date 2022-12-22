import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListedialogComponent } from './listedialog.component';

describe('ListedialogComponent', () => {
  let component: ListedialogComponent;
  let fixture: ComponentFixture<ListedialogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListedialogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListedialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
