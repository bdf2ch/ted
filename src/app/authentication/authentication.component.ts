import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { AccountService } from '../shared/services/account.service';

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
  public authFormGroup: FormGroup;

  constructor(private builder: FormBuilder,
              private account: AccountService) {
    this.authFormGroup = this.builder.group({
      email: [this.loginData.email, [Validators.required, Validators.email]],
      password: [this.loginData.password, Validators.required]
    });
  }

  ngOnInit() {}

  /**
   * Returns error message for email field
   * @returns {string}
   */
  getEmailErrorMessage() {
    return this.authFormGroup.get('email').hasError('required') ? 'You must enter your email' :
      this.authFormGroup.get('email').hasError('email') ? 'Email is not valid' : '';
  }

  /**
   * Returns error message for password field
   * @returns {string}
   */
  getPasswordErrorMessage() {
    return this.authFormGroup.get('password').hasError('required') ? 'You must enter your password' : '';
  }

  /**
   * Log in user
   * @returns {Promise<void>}
   */
  async logIn() {
    const result = await this.account.logIn(this.loginData.email, this.loginData.password);

  }

}
