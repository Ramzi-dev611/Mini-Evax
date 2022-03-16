import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '../models/appointment.model';


@Injectable({
  providedIn: 'root'
})
export class AppointmentService {
  constructor(private readonly http: HttpClient) { }

  public getAppointments(): Observable<Appointment[]>{
    const userId = localStorage.getItem('id');
    return this.http.get<Appointment[]>(`http://localhost:5000/appointments?userId=${id}`);
  }

}
