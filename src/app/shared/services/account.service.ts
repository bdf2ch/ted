import { Injectable } from '@angular/core';
import { AccountResource } from '../resources/account.resource';
import { User } from '../models/user.model';

@Injectable()
export class AccountService {
  private currentUser: User | null;

  constructor(private accountResource: AccountResource) {
    this.currentUser = null;
  }

  /**
   * Returns current user
   * @returns {User | null}
   */
  getCurrentUser(): User | null {
    return this.currentUser;
  }

  /**
   * Register new user
   * @param {string} email - Email
   * @param {string} password - Password
   * @returns {Promise<User | null>}
   */
  async register(email: string, password: string): Promise<User | null> {
    try {
      const result = await this.accountResource.register({email: email, password: password});
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
