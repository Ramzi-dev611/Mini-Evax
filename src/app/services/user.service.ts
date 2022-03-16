import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private users : User[] =[]
  
  constructor(private readonly http: HttpClient) {}

  public getCurrentUser(): Observable<User>{
    if(!localStorage.getItem('id')){
      localStorage.setItem('id', '1')
    }
    const id = localStorage.getItem('id');
    return this.http.get<User>(`http://localhost:5000/user/${id}`);
  }

  public updateUser(user: User): Observable<User>{
    return this.http.put<User>(`http://localhost:5000/user/${user.id}`, user)
  }
}
