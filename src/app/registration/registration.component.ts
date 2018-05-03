import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators } from '@angular/forms';

@Component({
  selector: 'app-registartion',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public registrationData = {
    email: '',
    systemName: '',
    password: '',
    confirmPassword: ''
  };
  public email: FormControl = new FormControl('', [Validators.email, Validators.required]);
  public systemName: FormControl = new FormControl('', Validators.required);
  public password: FormControl = new FormControl('', Validators.required);
  public confirmPassword: FormControl = new FormControl('', [Validators.required, this.passwordsMatchValidator(this.password)]);


  constructor() { }

  ngOnInit() {
  }

  passwordsMatchValidator(password: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      password.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
      return password.value !== control.value ? {'passwordsNotMatch': {value: 'Passwords must match'}} : null;
    };
  }

  getSystemNameErrorMessage() {
    return this.systemName.hasError('required') ? 'You must enter your system name' : '';
  }


  getEmailErrorMessage() {
    return this.email.hasError('required') ? 'You must enter your email' :
      this.email.hasError('email') ? 'Email is not valid' : '';
  }

  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'You must enter your password' : '';
  }

  getConfirmPasswordErrorMessage() {
    return this.confirmPassword.hasError('required') ? 'You must confirm your password' :
      this.confirmPassword.hasError('passwordsNotMatch') ? 'Passwords must match' : '';
  }

}
