import { Component, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/models/user.model';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {
  public currentUser: User = new User();
  public phone: string ="";
  public email: string=""
  constructor(private readonly userService: UserService, private readonly toastr: ToastrService) {}

  ngOnInit(): void {
    this.userService.getCurrentUser().subscribe({
      'next': data => {
        this.currentUser=data;
        this.phone = this.currentUser.phone;
        this.email = this.currentUser.email;
      }
    });
  }

  public changeEmail(){
    this.currentUser.email = this.email;
    this.userService.updateUser(this.currentUser).subscribe({
      next: data => {
        this.currentUser = data
        this.toastr.success('Update Successfull')
      },
      error: err => this.toastr.error('Error Occured Check with Admin')
    })
  }

  public changePhone(){
    this.currentUser.phone = this.phone;
    this.userService.updateUser(this.currentUser).subscribe({
      next: data => {
        this.currentUser = data
        this.toastr.success('Update Successfull')
      },
      error: err => this.toastr.error('Error Occured Check with Admin')
    })
  }

}
