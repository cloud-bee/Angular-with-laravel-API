import { Component } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { AuthService } from 'src/app/services/api-service/auth.service';
import { Router } from '@angular/router';
import { GlobleUserService } from 'src/app/services/shared/globle-user.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.scss']
})
export class MenuBarComponent {

  isHandset$: Observable<boolean> = this.breakpointObserver.observe(Breakpoints.Handset)
    .pipe(
      map(result => result.matches)
    );

  constructor(private breakpointObserver: BreakpointObserver, private auth: AuthService, private router: Router, public authUser: GlobleUserService) { }

  signOut() {
    this.auth.signOut().subscribe(
      req => {
        this.router.navigate(['/login']);
      }
    );
  }

}
