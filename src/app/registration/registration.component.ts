import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, ValidatorFn, Validators, FormBuilder, FormGroup } from '@angular/forms';
import {AccountService} from "../shared/services/account.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {
  public userRegistrationData = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };
  public companyRegistrationData = {
    companyName: '',
    serviceType: '',
    serviceUrl: '',
    serviceAPIKey: ''
  };
  public password: FormControl = new FormControl(this.userRegistrationData.password, Validators.required);
  public firstStepFormGroup: FormGroup;
  public secondStepFormGroup: FormGroup;
  public serviceTypes: any[];


  constructor(private builder: FormBuilder,
              private account: AccountService) {
    this.serviceTypes = [
      {id: 1, title: 'Teamwork'},
      {id: 2, title: 'Jira'}
    ];
    this.firstStepFormGroup = this.builder.group({
      firstName: [this.userRegistrationData.firstName, Validators.required],
      lastName: [this.userRegistrationData.lastName, Validators.required],
      email: [this.userRegistrationData.email, [Validators.required, Validators.email]],
      password: this.password,
      confirmPassword: [this.userRegistrationData.confirmPassword, [Validators.required, this.passwordMismatchValidator(this.password)]]
    });
    this.secondStepFormGroup = this.builder.group({
      companyName: [this.companyRegistrationData.companyName, Validators.required],
      serviceType: [{value: this.serviceTypes[0], disabled: true}, Validators.required],
      serviceUrl: [this.companyRegistrationData.serviceUrl, Validators.required],
      serviceAPIKey: [this.companyRegistrationData.serviceAPIKey, Validators.required]
    });
  }

  ngOnInit() {}


  /**
   * Returns error message for first name field
   * @returns {string}
   */
  getFirstNameErrorMessage() {
    return this.firstStepFormGroup.get('firstName').hasError('required') ? 'Please, enter your first name' : '';
  }

  /**
   * Returns error message for last name
   * @returns {string}
   */
  getLastNameErrorMessage() {
    return this.firstStepFormGroup.get('lastName').hasError('required') ? 'Please, enter your last name' : '';
  }

  /**
   * Returns error message for password field
   * @returns {string}
   */
  getPasswordErrorMessage() {
    return this.password.hasError('required') ? 'Please, enter your password' : '';
  }

  /**
   * Returns error mesage for confirm password field
   * @returns {string}
   */
  getConfirmPasswordErrorMessage() {
    return this.firstStepFormGroup.get('confirmPassword').hasError('required') ? 'Please, confirm your password' :
      this.firstStepFormGroup.get('confirmPassword').hasError('passwordsNotMatch') ? 'Passwords must match' : '';
  }

  /**
   * Password confirmation field validator
   * @param {AbstractControl} password - Password control
   * @returns {ValidatorFn}
   */
  passwordMismatchValidator(password: AbstractControl): ValidatorFn {
    return (control: AbstractControl): {[key: string]: any} => {
      password.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
      return password.value !== control.value ? {'passwordsNotMatch': {value: 'Passwords must match'}} : null;
    };
  }

  /**
   * Returns error message for company name field
   * @returns {string}
   */
  getCompanyNameErrorMessage() {
    return this.secondStepFormGroup.get('companyName').hasError('required') ? 'Please, enter company name' : '';
  }

  /**
   * Returns error message for service URL field
   * @returns {string}
   */
  getServiceUrlErrorMessage() {
    return this.secondStepFormGroup.get('serviceUrl').hasError('required') ? 'Please, enter service URL' : '';
  }

  /**
   * Returns error message for first name field
   * @returns {string}
   */
  getServiceAPIKeyErrorMessage() {
    return this.secondStepFormGroup.get('serviceAPIKey').hasError('required') ? 'Please, enter service API key' : '';
  }

  async register() {
    const user = await this.account.register(this.userRegistrationData.email, this.userRegistrationData.password);
    if (user) {
      //const company
    }
  }
}
