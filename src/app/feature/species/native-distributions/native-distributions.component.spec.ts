import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NativeDistributionsComponent } from './native-distributions.component';

describe('NativeDistributionsComponent', () => {
  let component: NativeDistributionsComponent;
  let fixture: ComponentFixture<NativeDistributionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NativeDistributionsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NativeDistributionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
