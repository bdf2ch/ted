import { Component, OnInit } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.scss']
})
export class AuthenticationComponent implements OnInit {
  public loginData = {
    email: '',
    password: ''
  };
  public email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  public password: FormControl = new FormControl('', Validators.required);

  constructor() { }

  ngOnInit() {}

  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your email' :
      this.email.hasError('email') ? 'Email is not valid' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter your password' : '';
  }

}
