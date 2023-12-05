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
    ProfileComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    provideClientHydration(),
    TestService,
    HttpClient
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
