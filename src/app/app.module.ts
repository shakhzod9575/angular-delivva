import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { IntroComponent } from './intro/intro.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ContentComponent } from './content/content.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { TestService } from './services/test.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { DashboardComponent } from './dashboard/dashboard.component';
import { EmailComponent } from './email/email.component';
import { OsmViewComponent } from './osm-view/osm-view.component';
import { InternalErrorComponent } from './internal-error/internal-error.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationService } from './services/register/registration.service';
import { ProfileService } from './services/profile/profile.service';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { OrderC2Component } from './order-c2/order-c2.component'
import {MatInputModule} from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatNativeDateModule } from '@angular/material/core';
import { OrderCreationComponent } from './order-creation/order-creation.component';
import { ProfileDataComponent } from './profile-data/profile-data.component';
import { EditProfileComponent } from './edit-profile/edit-profile.component';
import { VerificationComponent } from './verification/verification.component';
import { ResendEmailComponent } from './resend-email/resend-email.component';

@NgModule({
  declarations: [
    AppComponent,
    IntroComponent,
    GalleryComponent,
    ContentComponent,
    TestimonialsComponent,
    RegistrationComponent,
    HomeComponent,
    LoginComponent,
    DashboardComponent,
    EmailComponent,
    OsmViewComponent,
    InternalErrorComponent,
    ProfileComponent,
    OrderC2Component,
    OrderCreationComponent,
    ProfileDataComponent,
    EditProfileComponent,
    VerificationComponent,
    ResendEmailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatInputModule,
    MatFormFieldModule,
    MatNativeDateModule
  ],
  providers: [
    provideClientHydration(),
    TestService,
    RegistrationService,
    ProfileService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
