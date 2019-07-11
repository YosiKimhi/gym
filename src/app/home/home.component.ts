import { Component, OnInit } from '@angular/core';
import { GymClass } from '../GymClass';
//import { GymService } from '../gym.service';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html', 
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  gymclasses : GymClass[] ;
  constructor() { }

  ngOnInit(): void{
    
  }


}
