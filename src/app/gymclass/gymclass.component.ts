import { Component, OnInit, Input } from '@angular/core';
import { GymClass } from '../GymClass';

@Component({
  selector: 'app-gymclass',
  templateUrl: './gymclass.component.html',
  styleUrls: ['./gymclass.component.css']
})
export class GymclassComponent implements OnInit {
   
  @Input() gymclass : GymClass;
  
  constructor() { }

  ngOnInit() {
    
  }

}
