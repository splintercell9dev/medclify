import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MedicalUsesComponent } from './medical-uses.component';

describe('MedicalUsesComponent', () => {
  let component: MedicalUsesComponent;
  let fixture: ComponentFixture<MedicalUsesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MedicalUsesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MedicalUsesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
