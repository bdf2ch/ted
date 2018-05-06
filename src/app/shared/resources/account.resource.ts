import { Injectable } from '@angular/core';
import { IResourceMethod, Resource, ResourceAction, ResourceHandler, ResourceParams, ResourceRequestMethod } from '@ngx-resource/core';
import { IUser } from '../interfaces/user.interface';
import { environment } from '../../../environments/environment';

@Injectable()
@ResourceParams({
  pathPrefix: environment.apiUrl + 'account'
})
export class AccountResource extends Resource {

  constructor(handler: ResourceHandler) {
    super(handler);
  }

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/register',
    withCredentials: true
  })
  register: IResourceMethod<{email: string, password: string}, IUser | null>;

  @ResourceAction({
    method: ResourceRequestMethod.Post,
    path: '/login',
    withCredentials: true
  })
  login: IResourceMethod<{emailAddress: string, password: string}, IUser | null>;

  @ResourceAction({
    method: ResourceRequestMethod.Get,
    path: '/logout',
    withCredentials: true
  })
  logOut: IResourceMethod<void, void>;
}
