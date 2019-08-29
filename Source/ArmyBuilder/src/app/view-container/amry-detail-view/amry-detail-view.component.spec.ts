import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AmryDetailViewComponent } from './amry-detail-view.component';

describe('AmryDetailViewComponent', () => {
  let component: AmryDetailViewComponent;
  let fixture: ComponentFixture<AmryDetailViewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AmryDetailViewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AmryDetailViewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
