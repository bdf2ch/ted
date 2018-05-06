export interface IUser {
  id?: number;
  firstName: string;
  lastName: string;
  emailAddress: string;
  password?: string;
  confirmPassword?: string;
}
