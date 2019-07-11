import { Component, OnInit, OnDestroy,NgZone } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {GymService} from '../gym.service';
import { GymClass } from '../GymClass';
import { User } from '../UserClass';
import { forEach } from '@angular/router/src/utils/collection';
import { UserService } from '../user.service';
import { ISubscription  } from 'rxjs/Subscription';

@Component({
  selector: 'app-gym-class-details',
  templateUrl: './gym-class-details.component.html',
  styleUrls: ['./gym-class-details.component.css']
})
export class GymClassDetailsComponent implements OnInit,OnDestroy {

  class : GymClass;
  user: User;
  is_currentUser:boolean = false; 
  sub:ISubscription;
  constructor(private route: ActivatedRoute,private gs :GymService,private us :UserService,private zone:NgZone) { 

    this.class = new GymClass(); 
    this.user = new User();
    this.user.name = localStorage.getItem("username");
    this.user.email = localStorage.getItem("useremail");
    this.user.id = localStorage.getItem("userid");
    this.user.photoUrl =localStorage.getItem("userpix");


    this.sub = this.gs.getGymClassById(this.route.snapshot.paramMap.get('id')).subscribe((data)=>{
      this.class = data;
      let flag = false;
      data.users.forEach(element => {
        if (element.name == localStorage.getItem('username'))
          flag = true;
      });
      this.is_currentUser = flag;
      
      console.log(data);
    });
    
  
  }


  joinUserToClass(){


      this.class.numberOfPar++;
      //this.class.maxNumber--;
      this.class.users.push(this.user);
      this.zone.run(()=>{

      this.gs.updateGymClass(this.class);


      this.is_currentUser = true;
    });

    
    
  }

  ngOnInit() {

    
  }

  ngOnDestroy(){

    this.sub.unsubscribe();

  }

}
