import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from '../shared/permission.service';

@Injectable({
  providedIn: 'root'
})
export class NonAuthGuard implements CanActivate {
  constructor(private router: Router, private permission: PermissionService) { }
  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {
    if (this.permission.isAuthenticated() && localStorage.getItem('AccessToken') !== 'undefined') {
      this.router.navigate(['dashboard']);
      return false;
    }
    return true;
  }
}
