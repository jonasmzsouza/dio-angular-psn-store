import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoCompatibilitiesComponent } from './info-compatibilities.component';

describe('InfoCompatibilitiesComponent', () => {
  let component: InfoCompatibilitiesComponent;
  let fixture: ComponentFixture<InfoCompatibilitiesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoCompatibilitiesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InfoCompatibilitiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
