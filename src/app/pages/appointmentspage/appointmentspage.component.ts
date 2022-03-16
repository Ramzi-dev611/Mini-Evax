import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Appointment } from 'src/app/models/appointment.model';

import { User } from 'src/app/models/user.model';
import { AppointmentService } from 'src/app/services/appointment.service';


@Component({
  selector: 'app-appointmentspage',
  templateUrl: './appointmentspage.component.html',
  styleUrls: ['./appointmentspage.component.css']
})
export class AppointmentspageComponent implements OnInit {
  public currentUser: User = new User();
  public appointments: Appointment[] = [];
  
  constructor(private readonly toastr: ToastrService,private readonly appointmentService: AppointmentService) {}

  ngOnInit(): void {
    this.appointmentService.getAppointments().subscribe({
      'next': data => {
        this.appointments=data;
      }
    });

  }

  public getPass(){

        this.toastr.success('We sent you your pass. Please check your Email')
  }

}
