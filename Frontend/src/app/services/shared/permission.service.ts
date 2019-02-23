import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PermissionService {

  constructor() { }

  isAuthenticated(): boolean {
    return !!localStorage.getItem('AccessToken');
  }

  getToken(): string {
    return localStorage.getItem('AccessToken');
  }

}
