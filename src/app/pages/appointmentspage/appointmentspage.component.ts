import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment.model';
import { AppointmentService } from 'src/app/services/appointment.service';

@Component({
  selector: 'app-appointmentspage',
  templateUrl: './appointmentspage.component.html',
  styleUrls: ['./appointmentspage.component.css']
})
export class AppointmentspageComponent implements OnInit {

  public appointments: Appointment[] = []

  constructor(
    private readonly appointmentService: AppointmentService,
    private readonly toastr: ToastrService 
  ) { }

  ngOnInit(): void {
    this.appointmentService.getCurrentUserAppointments().subscribe({
      next: data => {
        this.appointments = data;
      }
    })
  }

}
