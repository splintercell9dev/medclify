import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoLimitedComponent } from './info-limited.component';

describe('InfoLimitedComponent', () => {
  let component: InfoLimitedComponent;
  let fixture: ComponentFixture<InfoLimitedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoLimitedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoLimitedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
