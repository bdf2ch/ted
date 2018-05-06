import { Injectable } from '@angular/core';
import { IResourceMethod, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { ICompany } from '../interfaces/company.interface';
import { environment } from '../../../environments/environment';

@Injectable()
@ResourceParams({
  pathPrefix: environment.apiUrl + 'company'
})
export class CompanyResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    withCredentials: true
  })
  add: IResourceMethod<ICompany, ICompany>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/{!id}',
    withCredentials: true
  })
  getById: IResourceMethod<{id: string}, ICompany>;
}
