import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoResumeComponent } from './info-resume.component';

describe('InfoResumeComponent', () => {
  let component: InfoResumeComponent;
  let fixture: ComponentFixture<InfoResumeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoResumeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoResumeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
