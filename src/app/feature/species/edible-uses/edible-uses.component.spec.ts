import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EdibleUsesComponent } from './edible-uses.component';

describe('EdibleUsesComponent', () => {
  let component: EdibleUsesComponent;
  let fixture: ComponentFixture<EdibleUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EdibleUsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EdibleUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
