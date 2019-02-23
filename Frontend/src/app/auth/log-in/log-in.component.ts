import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthErrorService } from 'src/app/services/lang/en-text/auth-error.service';
import { MatSnackBar } from '@angular/material';
import { AuthService } from 'src/app/services/api-service/auth.service';
import { IUser } from 'src/app/services/model/auth.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-log-in',
  templateUrl: './log-in.component.html',
  styleUrls: ['./log-in.component.scss']
})
export class LogInComponent implements OnInit {
  user: any;
  public progressBar: boolean = false;
  public hide: boolean = true;

  constructor(
    private titleService: Title,
    public sgValidation: AuthErrorService,
    private snackBar: MatSnackBar,
    private auth: AuthService,
    private router: Router
  ) { }

  loginForm = new FormGroup({
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
  });

  ngOnInit() {
    this.titleService.setTitle('Login');
  }

  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.progressBar = true;
    if (this.loginForm.invalid) {
      this.progressBar = false;
      return;
    }

    this.user = new IUser();
    this.user.email = this.f.email.value.trim();
    this.user.password = this.f.password.value.trim();

    this.auth.signIn(this.user).subscribe(
      req => {
        this.progressBar = false;
        if (req.status === 401) {
          this.snackBar.open('Error : ' + req.message, '', {
            duration: 3000
          });
          return;
        }

        this.router.navigate(['/dashboard']);
      },
      error => {
        this.progressBar = false;
        this.snackBar.open('Error : ' + error, '', {
          duration: 3000
        });
      }
    );
  }

}
