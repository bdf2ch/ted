import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ResourceModule } from '@ngx-resource/handler-ngx-http';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatTableModule } from '@angular/material/table';
import { MatDialogModule } from '@angular/material/dialog';
import { MatStepperModule } from '@angular/material/stepper';
import { MatSelectModule } from '@angular/material/select';


import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthenticationComponent } from './authentication/authentication.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HourlyRateDialogComponent } from './dashboard/components/hourly-rate-dialog/hourly-rate-dialog.component';
import { AccountResource } from './shared/resources/account.resource';
import { AccountService } from './shared/services/account.service';
import { CompanyResource } from './shared/resources/company.resource';
import { CompanyService } from './shared/services/company.service';


const routes: Routes = [
  {
    path: '',
    component: RegistrationComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent
  },
  {
    path: 'authentication',
    component: AuthenticationComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  }
];


@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    AuthenticationComponent,
    DashboardComponent,
    HourlyRateDialogComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(routes),
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    ResourceModule.forRoot(),
    LayoutModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatTableModule,
    MatDialogModule,
    MatStepperModule,
    MatSelectModule
  ],
  entryComponents: [
    HourlyRateDialogComponent
  ],
  providers: [
    AccountResource,
    AccountService,
    CompanyResource,
    CompanyService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
