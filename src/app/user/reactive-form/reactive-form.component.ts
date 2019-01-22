import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl} from '@angular/forms'

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.scss']
})
export class ReactiveFormComponent implements OnInit {
  rfContact: FormGroup;
  constructor() { }

  ngOnInit() {
    this.rfContact = new FormGroup({
      contactName: new FormControl(),
      email: new FormControl(),
      social: new FormGroup({
        facebook: new FormControl(),
        twitter: new FormControl(),
        website: new FormControl()
      }),
      tel: new FormControl()
    });
  }
  onSubmit() {
    console.log(this.rfContact);
  }

}
