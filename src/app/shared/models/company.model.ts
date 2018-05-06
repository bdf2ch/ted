import { ICompany } from '../interfaces/company.interface';

export class Company {
  id: number;
  name: string;
  serviceType: string;
  serviceURL: string;
  serviceAPIKey: string;

  constructor (config?: ICompany) {
    this.id = config ? config.id : 0;
    this.name = config ? config.CompanyName : '';
    this.serviceType = config ? config.CredentialsType : '';
    this.serviceURL = config ? config.CredentialsUrl : '';
    this.serviceAPIKey = config ? config.CredentialsApiKey : '';
  }
}
