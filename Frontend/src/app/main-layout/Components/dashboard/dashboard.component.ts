import { Component, OnInit, AfterViewInit } from '@angular/core';
import { map } from 'rxjs/operators';
import { Breakpoints, BreakpointObserver } from '@angular/cdk/layout';
import { UserService } from 'src/app/services/api-service/user.service';
import { IUserDetails } from 'src/app/services/model/user.model';
import { GlobleUserService } from 'src/app/services/shared/globle-user.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit, AfterViewInit {

  /** Based on the screen size, switch from standard to one column per row */
  cards = this.breakpointObserver.observe(Breakpoints.Handset).pipe(
    map(({ matches }) => {
      if (matches) {
        return [
          { title: 'Card 1', cols: 1, rows: 1 }
        ];
      }

      return [
        { title: 'Card 1', cols: 2, rows: 1 }
      ];
    })
  );

  constructor(private breakpointObserver: BreakpointObserver, private user: UserService, public authUser: GlobleUserService) { this.authUser.user = new IUserDetails; }

  ngOnInit(): void {
    this.user.getUser().subscribe(req => this.authUser.user = req);
  }

  ngAfterViewInit(): void {

  }

}
