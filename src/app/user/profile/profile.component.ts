import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  contact = {
    contactName: "Nguyen Van Diem",
    email: "diemnvvn@gmail.com",
    facebook: "facebook.com",
    twitter: "twitter.com",
    website: "diemnv.com",
    tel: "123456789"
  }
  constructor() { }

  ngOnInit() {
  }
  onSubmit(f: NgForm) {
    console.log(f);
  }
}
