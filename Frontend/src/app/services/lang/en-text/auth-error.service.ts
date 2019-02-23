import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthErrorService {

  constructor() { }

  get register_credential_validation() {
    return {
      name: [
        { type: 'required', message: 'Full Name is required' }
      ],
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'email', message: 'Please enter a valid email' },
        { type: 'uniqueEmail', message: 'Email already exists.' }
      ],
      password: [
        { type: 'required', message: 'Password is required' },
        { type: 'minlength', message: 'Password must be at least 8 characters long' },
        { type: 'pattern', message: 'Your password must be over 8 characters and include an uppercase and a lowercase letter, a number and a special character' }
      ],
      confirm_password: [
        { type: 'required', message: 'Confirm password is required' },
        { type: 'compare', message: 'Password mismatch' }
      ]
    };
  }

  get credential_validation() {
    return {
      email: [
        { type: 'required', message: 'Email is required' },
        { type: 'required email', message: 'Email is required' },
        { type: 'email', message: 'Please enter a valid email' },
      ],
      password: [
        { type: 'required', message: 'Password is required' },
      ]
    };
  }
}
