import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewAllSubjectsComponent } from './view-all-subjects.component';

describe('ViewAllSubjectsComponent', () => {
  let component: ViewAllSubjectsComponent;
  let fixture: ComponentFixture<ViewAllSubjectsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewAllSubjectsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewAllSubjectsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
