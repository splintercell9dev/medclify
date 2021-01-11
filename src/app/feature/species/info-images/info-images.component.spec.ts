import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InfoImagesComponent } from './info-images.component';

describe('InfoImagesComponent', () => {
  let component: InfoImagesComponent;
  let fixture: ComponentFixture<InfoImagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InfoImagesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InfoImagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
