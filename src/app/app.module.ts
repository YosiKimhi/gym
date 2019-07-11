import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { SocialLoginModule, AuthServiceConfig } from "angular4-social-login";
import { GoogleLoginProvider, FacebookLoginProvider } from "angular4-social-login";
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { GymclassComponent } from './gymclass/gymclass.component';
import { AppRoutingModule } from './/app-routing.module';
import { HomeComponent } from './home/home.component';
import { GymClassDetailsComponent } from './gym-class-details/gym-class-details.component';
import { SignInAndOutComponent } from './sign-in-and-out/sign-in-and-out.component';
import { NavbarComponent } from './navbar/navbar.component';
import { AboutComponent } from './about/about.component';
import { AllclassesComponent } from './allclasses/allclasses.component';
//import {AuthServices} from './auth.service';
import { LoginComponent } from './login/login.component';
//import {AuthServiceService } from './auth-service.service';
import {GymService} from './gym.service';
import { UserService } from './user.service';
import { ProfileComponent } from './profile/profile.component';
 

let config = new AuthServiceConfig([
  {
    id: GoogleLoginProvider.PROVIDER_ID,
    provider: new GoogleLoginProvider("545196950961-bg5udakvqr0tbjhqefq583v5eeocicvo.apps.googleusercontent.com")
  },
  {
    id: FacebookLoginProvider.PROVIDER_ID,
    provider: new FacebookLoginProvider("1810968662533970")
  }
]);


@NgModule({
  declarations: [
    AppComponent,
    GymclassComponent,
    HomeComponent,
    GymClassDetailsComponent,
    SignInAndOutComponent,
    NavbarComponent,
    AboutComponent,
    AllclassesComponent,
    LoginComponent,
    ProfileComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AppRoutingModule,
    SocialLoginModule.initialize(config)
  ],
  providers: [GymService,UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
