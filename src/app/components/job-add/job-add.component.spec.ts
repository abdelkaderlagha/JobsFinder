import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobAddComponent } from './job-add.component';

describe('JobAddComponent', () => {
  let component: JobAddComponent;
  let fixture: ComponentFixture<JobAddComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JobAddComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobAddComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
