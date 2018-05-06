import { Injectable } from '@angular/core';
import { AccountResource } from '../resources/account.resource';
import { User } from '../models/user.model';
import {IUser} from "../interfaces/user.interface";

@Injectable()
export class AccountService {
  private currentUser: User | null;
  private isAuthenticationInProgress: boolean;
  private isRegistrationInProgress: boolean;

  constructor(private accountResource: AccountResource) {
    this.currentUser = null;
    this.isAuthenticationInProgress = false;
    this.isRegistrationInProgress = false;
  }

  /**
   * Returns current user
   * @returns {User | null}
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  authenticationInProgress(): boolean {
    return this.isAuthenticationInProgress;
  }

  registrationInProgress(): boolean {
    return this.isRegistrationInProgress;
  }

  /**
   * Checks current user session
   * @returns {Promise<User | null>}
   */
  async check(): Promise<User | null> {
    try {
      const result = await this.accountResource.check();
      if (result) {
        this.currentUser = new User(result);
        return this.currentUser;
      }
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  /**
   * Register new user
   * @param {string} email - Email
   * @param {string} password - Password
   * @returns {Promise<User | null>}
   */
  async register(user: IUser): Promise<User | null> {
    this.isRegistrationInProgress = true;
    try {
      const result = await this.accountResource.register(user);
      if (result) {
        this.currentUser = new User(result);
        this.isRegistrationInProgress = false;
        return this.currentUser;
      }
    } catch (error) {
      console.error(error);
      this.isRegistrationInProgress = false;
      return null;
    }
  }

  /**
   * User log in
   * @param {string} email - Email
   * @param {string} password - Password
   * @returns {Promise<User | null>}
   */
  async logIn(email: string, password: string): Promise<User | null> {
    try {
      const result = await this.accountResource.login({emailAddress: email, password: password});
      if (result) {
        this.currentUser = new User(result);
        return this.currentUser;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

  /**
   * User log out
   * @returns {Promise<void>}
   */
  async logOut(): Promise<void> {
    try {
      await this.accountResource.logOut();
      this.currentUser = null;
    } catch (error) {
      console.error(error);
    }
  }

}
