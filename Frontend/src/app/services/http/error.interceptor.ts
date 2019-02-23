import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';
import { AuthService } from '../api-service/auth.service';


@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor(
    private snackBar: MatSnackBar,
    private router: Router,
    private auth: AuthService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(catchError(err => {
      if (err.status === 404) {
        this.snackBar.open('Please contact system administrator.', 'Not Found', {
          duration: 3000
        });
      }
      if (err.status === 500) {
        this.auth.redirectWithoutToken();
        this.snackBar.open('Please contact system administrator and try again later.', 'Internal Server Error', {
          duration: 3000
        });
      }
      if (err.status === 503) {
        this.snackBar.open('Please contact system administrator.', 'Service Unavailable', {
          duration: 3000
        });
      }
      if (err.status === 401) {
        this.auth.redirectWithoutToken();
        this.snackBar.open('Unauthorized Service request', 'Cancel', {
          duration: 3000
        });
      }

      const error = err.error.message || err.statusText;
      return throwError(error);
    }));
  }

}
