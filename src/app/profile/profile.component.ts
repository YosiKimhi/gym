import { Component, OnInit } from '@angular/core';
import { SocialUser } from 'angular4-social-login';
import { Router } from '@angular/router';
import { User } from '../UserClass';
import { UserService } from '../user.service';
import {GymService} from '../gym.service';
import { GymClass } from '../GymClass';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  user : User;
  gymclasses : GymClass[] ;
  list : GymClass[] = [];

  constructor( private router :Router ,private us:UserService,private gs :GymService) { 

    this.user = new User();
    
    this.user.name = localStorage.getItem('username');
    this.user.id = localStorage.getItem('userid');
    this.user.email = localStorage.getItem('useremail');
    this.user.photoUrl = localStorage.getItem('userpix');
  }
  

  ngOnInit() {

    this.gs.getGymClasses().subscribe((data)=>{
      this.gymclasses = data as GymClass[];

      this.gymclasses.forEach(gymclass => {
      
        gymclass.users.forEach(user => {
        
            if (localStorage.getItem("userid") == user.id)
                this.list.push(gymclass);

        });

      });
      console.log(this.list)
    
    });

  }

  signOut(){

    this.us.clearUser();
    localStorage.removeItem('userid');
    localStorage.removeItem('username');
    localStorage.removeItem('userpix');
    localStorage.removeItem('useremail');

    this.router.navigate(['/']);   
    //window.location.href = '/';
  }

  deleteUserFromClass(InGymclass : GymClass,i){

    let index;
    InGymclass.users.forEach(element => {
      if(element.id == localStorage.getItem("userid"))
        {
          index = InGymclass.users.indexOf(element);

        }
    });
    if (index != -1)
    InGymclass.users.splice(index ,1);

    InGymclass.numberOfPar--;
    InGymclass.maxNumber++;
    console.log(i);

    this.list.splice(i,1);

    this.gs.updateGymClass(InGymclass);

  }

}



