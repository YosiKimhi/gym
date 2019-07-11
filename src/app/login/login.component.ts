import { Component, OnInit } from '@angular/core';
import { AuthService } from "angular4-social-login";
import { SocialUser } from 'angular4-social-login';
import { FacebookLoginProvider, GoogleLoginProvider } from "angular4-social-login";
import { Router } from '@angular/router';
import { User } from '../UserClass'
import { UserService } from '../user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  constructor(private authService : AuthService, private router :Router ,private us:UserService) { }

  ngOnInit() {

  }

 
  signInWithFB(): void {
    this.authService.signIn(FacebookLoginProvider.PROVIDER_ID).then((user)=>{

      this.us.setUser(user as User);

      console.log("loged with fasebook",user);
      localStorage.setItem('userid', user.id);
      localStorage.setItem('username', user.name);
      localStorage.setItem('userpix', user.photoUrl);
      localStorage.setItem('useremail', user.email);
      alert("login is sucsses");
      
      this.router.navigate(['/']); 
      //window.location.href = '/';
    });
  }
 

}
