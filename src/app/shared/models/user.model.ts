import { IUser } from '../interfaces/user.interface';

export class User {
  firstName: string;
  lastName: string;
  email: string;

  constructor(config?: IUser) {
    this.firstName = config ? config.firstName : '';
    this.lastName = config ? config.lastName : '';
    this.email = config ? config.email : '';
  }
}
