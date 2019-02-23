import { Injectable } from '@angular/core';
import { IUserDetails } from '../model/user.model';

@Injectable({
  providedIn: 'root'
})
export class GlobleUserService {
  user: IUserDetails;

  get name(): String {
    return this.user.name;
  }

  get email(): String {
    return this.user.email;
  }

  get created_at(): String {
    return this.user.created_at;
  }

}
