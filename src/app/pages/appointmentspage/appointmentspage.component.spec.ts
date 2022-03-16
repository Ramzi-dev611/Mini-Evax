import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointmentspageComponent } from './appointmentspage.component';

describe('AppointmentspageComponent', () => {
  let component: AppointmentspageComponent;
  let fixture: ComponentFixture<AppointmentspageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppointmentspageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointmentspageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
