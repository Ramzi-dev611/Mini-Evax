import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-accountpage',
  templateUrl: './accountpage.component.html',
  styleUrls: ['./accountpage.component.css']
})
export class AccountpageComponent implements OnInit {

  email: string = 'falfoul@gmail.com';
  phone: string = '58289301'
  constructor() { }

  ngOnInit(): void {
  }

}
