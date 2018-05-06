import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AccountService } from '../services/account.service';

@Injectable()
export class AuthenticationGuard implements Resolve<Promise<boolean>> {
  constructor(private account: AccountService) {}

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<boolean> {
    return undefined;
  }
}
