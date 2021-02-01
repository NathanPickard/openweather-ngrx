import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RadarDesktopComponent } from './radar-desktop.component';

describe('RadarDesktopComponent', () => {
  let component: RadarDesktopComponent;
  let fixture: ComponentFixture<RadarDesktopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RadarDesktopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RadarDesktopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
