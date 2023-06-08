import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PreviewDetailsetudComponent } from './preview-detailsetud.component';

describe('PreviewDetailsetudComponent', () => {
  let component: PreviewDetailsetudComponent;
  let fixture: ComponentFixture<PreviewDetailsetudComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PreviewDetailsetudComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PreviewDetailsetudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
