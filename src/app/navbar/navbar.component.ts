import { Component, OnInit, Input ,OnDestroy,NgZone } from '@angular/core';
import { SocialUser } from 'angular4-social-login';
import { AuthService } from "angular4-social-login";
import { UserService } from '../user.service';
import { User } from '../UserClass';
import { ISubscription  } from 'rxjs/Subscription';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit,OnDestroy {

  user: User;
  sub: ISubscription;
  constructor(private authService : AuthService,private us: UserService,private zone:NgZone) { 

    console.log(localStorage.getItem("username"),localStorage.getItem("useremail"),localStorage.getItem("userid"),localStorage.getItem("userpix"));
    console.log(localStorage.getItem("username"),localStorage.getItem("useremail"),localStorage.getItem("userid"),localStorage.getItem("userpix"));
    

    if (localStorage.getItem("username")) 
    {
      this.user = new User();
      this.user.name = localStorage.getItem("username");
      this.user.email = localStorage.getItem("useremail");
      this.user.id = localStorage.getItem("userid");
      this.user.photoUrl =localStorage.getItem("userpix");

      this.us.setUser(this.user);
    }

    this.sub = this.us.getUser().subscribe(user=>this.user = user);

  }

  ngOnInit() {
    


  }

  ngOnDestroy(){

    this.sub.unsubscribe();

  }
}
