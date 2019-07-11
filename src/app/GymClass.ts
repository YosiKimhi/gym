import { User } from './UserClass';

export class GymClass {
    id:string ;
    name: string;
    description: string;
    price: string;
    duration : string;
    maxNumber : number;
    numberOfPar : number;
    day : string;
    time : string;
    pictureUrl:string;
    gymClassFull : boolean;
    users : User[];
  }