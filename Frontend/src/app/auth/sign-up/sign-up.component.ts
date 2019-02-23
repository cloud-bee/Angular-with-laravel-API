import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthErrorService } from 'src/app/services/lang/en-text/auth-error.service';
import { compareValidator } from 'src/app/directive/compare.directive';
import { IUser } from 'src/app/services/model/auth.model';
import { AuthService } from 'src/app/services/api-service/auth.service';
import { MatSnackBar } from '@angular/material';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.scss']
})
export class SignUpComponent implements OnInit {
  user: any;
  public progressBar: boolean = false;
  public hide: boolean = true;

  signupForm = new FormGroup({
    name: new FormControl('', Validators.compose([
      Validators.required
    ])),
    email: new FormControl('', Validators.compose([
      Validators.required,
      Validators.email
    ])),
    password: new FormControl('', Validators.compose([
      Validators.minLength(5),
      Validators.required
    ])),
    confirmpassword: new FormControl('', Validators.compose([
      Validators.required,
      compareValidator('password')
    ])),
  });

  constructor(public sgValidation: AuthErrorService, private auth: AuthService, private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit() {}

  get f() { return this.signupForm.controls; }

  onSubmit() {
    this.progressBar = true;
    if (this.signupForm.invalid) {
      this.progressBar = false;
      return;
    }

    this.user = new IUser();
    this.user.name = this.f.name.value;
    this.user.email = this.f.email.value.trim();
    this.user.password = this.f.password.value.trim();
    this.user.password_confirmation = this.f.confirmpassword.value.trim();

    this.auth.signUp(this.user).subscribe(
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
