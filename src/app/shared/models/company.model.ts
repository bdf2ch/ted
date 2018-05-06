import { ICompany } from '../interfaces/company.interface';

export class Company {
  id: number;
  name: string;
  serviceType: string;
  serviceURL: string;
  serviceAPIKey: string;

  constructor (config?: ICompany) {
    this.id = config ? config.id : 0;
    this.name = config ? config.companyName : '';
    this.serviceType = config ? config.credentialsType : '';
    this.serviceURL = config ? config.credentialsUrl : '';
    this.serviceAPIKey = config ? config.credentialsApiKey : '';
  }
}
