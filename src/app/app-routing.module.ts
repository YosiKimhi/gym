import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { GymClassDetailsComponent } from './gym-class-details/gym-class-details.component';
import { AllclassesComponent } from './allclasses/allclasses.component';


const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'class/:id', component: GymClassDetailsComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'about', component: AboutComponent },
  { path: 'allclasses', component: AllclassesComponent }
];


@NgModule({
  exports: [ RouterModule ],
  imports: [ RouterModule.forRoot(routes) ],
})
export class AppRoutingModule {}

