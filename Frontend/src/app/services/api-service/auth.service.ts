import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';
import { IUser } from '../model/auth.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  reqHeader = new HttpHeaders({ 'No-Auth': 'True' });

  constructor(private http: HttpClient, private router: Router) { }

  signIn(data: IUser): Observable<any> {
    return this.http.post<any>('/api/login', data, { headers: this.reqHeader }).pipe(
      tap(req => {
        return this.setToken(req);
      })
    );
  }

  signOut(): Observable<any> {
    return this.http.get<any>('/api/logout').pipe(
      tap(req => {
        this.distroyToken();
      })
    );
  }

  signUp(data: IUser): Observable<any> {
    return this.http.post<any>('/api/register', data, { headers: this.reqHeader }).pipe(
      tap(req => {
        return this.setToken(req);
      })
    );
  }

  setToken(req: any): void {
    if (req) {
      localStorage.removeItem('AccessToken');
      localStorage.setItem('AccessToken', req['access_token']);
    }
  }

  distroyToken() {
    localStorage.removeItem('AccessToken');
  }

  redirectWithoutToken() {
    this.distroyToken();
    this.router.navigate(['login']);
  }
}
