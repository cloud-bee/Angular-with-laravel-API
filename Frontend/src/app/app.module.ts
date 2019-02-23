import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
  MatGridListModule,
  MatCardModule,
  MatMenuModule,
  MatIconModule,
  MatButtonModule,
  MatToolbarModule,
  MatSidenavModule,
  MatListModule,
  MatFormFieldModule,
  MatInputModule,
  MatSelectModule,
  MatProgressSpinnerModule,
  MatSnackBarModule,
  MatProgressBarModule,
  MatBadgeModule
} from '@angular/material';
import { LayoutModule } from '@angular/cdk/layout';
import { LogInComponent } from './auth/log-in/log-in.component';
import { MenuBarComponent } from './main-layout/menu-bar/menu-bar.component';
import { MainBodyComponent } from './main-layout/main-body/main-body.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SignUpComponent } from './auth/sign-up/sign-up.component';
import { CompareDirective } from './directive/compare.directive';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { ErrorInterceptor } from './services/http/error.interceptor';
import { AuthInterceptor } from './services/http/auth.interceptor';
import { AuthService } from './services/api-service/auth.service';
import { FooterComponent } from './main-layout/footer/footer.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { DashboardComponent } from './main-layout/Components/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    MenuBarComponent,
    LogInComponent,
    MainBodyComponent,
    SignUpComponent,
    CompareDirective,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    LayoutModule,
    MatToolbarModule,
    MatSidenavModule,
    MatListModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatProgressSpinnerModule,
    MatSnackBarModule,
    MatProgressBarModule,
    MatBadgeModule
  ],
  providers: [
    AuthService,
    AuthGuardService,
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
