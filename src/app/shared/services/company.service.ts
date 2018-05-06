import { Injectable } from '@angular/core';
import { CompanyResource } from '../resources/company.resource';
import { ICompany } from '../interfaces/company.interface';
import { Company } from '../models/company.model';

@Injectable()
export class CompanyService {
  private companies: Company[];

  constructor(private resource: CompanyResource) {
    this.companies = [];
  }

  /**
   * Returns list of companies
   * @returns {Company[]}
   */
  getList(): Company[] {
    return this.companies;
  }

  /**
   * Adding new company
   * @param {ICompany} company - New company data
   * @returns {Promise<ICompany | null>}
   */
  async add(company: ICompany): Promise<Company | null> {
    try {
      const result = await this.resource.add(company);
      if (result) {
        const newlyAddedCompany = new Company(result);
        this.companies.push(newlyAddedCompany);
        return newlyAddedCompany;
      }
    } catch (error) {
      console.error(error);
      return null;
    }
  }

}
