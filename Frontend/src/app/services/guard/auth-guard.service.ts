import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { PermissionService } from '../shared/permission.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {

  constructor(private router: Router, private permission: PermissionService) { }

  canActivate(): boolean {
    if (!this.permission.isAuthenticated() && localStorage.getItem('AccessToken') === 'undefined') {
      this.router.navigate(['login']);
      return false;
    }
    return true;
  }

}
