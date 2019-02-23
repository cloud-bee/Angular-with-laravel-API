import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { PermissionService } from '../shared/permission.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  auth; any;

  constructor(private router: Router, private injector: Injector) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    this.auth = this.injector.get(PermissionService);
      const clonedreq = req.clone({
        setHeaders: {
          Authorization: `Bearer ${this.auth.getToken()}`
        }
      });

      return next.handle(clonedreq);
  }
}
