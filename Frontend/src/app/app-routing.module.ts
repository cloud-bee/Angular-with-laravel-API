import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LogInComponent } from './auth/log-in/log-in.component';
import { MenuBarComponent } from './main-layout/menu-bar/menu-bar.component';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { AuthGuardService as AuthGuard } from './services/guard/auth-guard.service';
import { NonAuthGuard } from './services/guard/non-auth.guard';
import { DashboardComponent } from './main-layout/Components/dashboard/dashboard.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LogInComponent, canActivate: [NonAuthGuard] },
  { path: 'signup', component: SignUpComponent, canActivate: [NonAuthGuard] },
  {
    path: 'dashboard', component: MenuBarComponent, canActivate: [AuthGuard],
    children: [
      { path: '', component: DashboardComponent },
      { path: 'settings', loadChildren: './main-layout/Components/settings/settings.module#SettingsModule' },
    ]
  },

  { path: '**', redirectTo: 'dashboard', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
