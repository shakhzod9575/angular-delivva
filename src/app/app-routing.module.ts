import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { OsmViewComponent } from './osm-view/osm-view.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { ProfileComponent } from './profile/profile.component';
import { OrderC2Component } from './order-c2/order-c2.component';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { VerificationComponent } from './verification/verification.component';
import { ResendEmailComponent } from './resend-email/resend-email.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomeComponent
  },
  {
    path: 'register',
    component: RegistrationComponent
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'dashboard',
    component: DashboardComponent
  },
  {
    path: 'verify',
    component: EmailComponent
  },
  {
    path: 'create-order/destination',
    component: OsmViewComponent
  },
  {
    path: 'create-order/date',
    component: OrderC2Component
  },
  {
    path: 'error',
    component: InternalErrorComponent
  },
  {
    path: 'fill-profile',
    component: ProfileComponent
  },
  {
    path: 'profile',
    component: ProfileDataComponent
  },
  {
    path: 'profile/edit',
    component: EditProfileComponent
  },
  {
    path: 'confirm',
    component: VerificationComponent
  },
  {
    path: 'resend',
    component: ResendEmailComponent
  },
  {
    path: 'create-order',
    component: OrderCreationComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
