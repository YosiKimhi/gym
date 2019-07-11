import { Component, OnInit } from '@angular/core';
import { GymClass } from '../GymClass';
import {GymService} from '../gym.service';
import { Headers, Http } from '@angular/http';
import "rxjs/add/operator/map";

@Component({
  selector: 'app-allclasses',
  templateUrl: './allclasses.component.html',
  styleUrls: ['./allclasses.component.css']
})
export class AllclassesComponent implements OnInit {

  gymclasses : GymClass[] ;
  constructor(private gs:GymService,private http:Http) { 

    this.gs.getGymClasses().subscribe(data=>this.gymclasses = data as GymClass[]);

  }

  ngOnInit() {



  }

}
