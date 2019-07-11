import { Injectable } from '@angular/core';
import { GymClass } from './GymClass';
import { Headers, Http,RequestOptions } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import { Observable  } from 'rxjs/Observable';


@Injectable()
export class GymService {
  private baseUrl = 'http://localhost:8080';

  constructor(private http: Http) { }

  getGymClasses():  Observable<GymClass[]> {
    return this.http.get('http://localhost:8080/gymclasses/all').map((res:any)=> res.json());
  }



  getGymClassById(id: string): Observable<GymClass> {
    
    return this.http.get('http://localhost:8080/gymclasses/'+ id ).map((res:any)=> res.json());
    
  }
 
  updateGymClass(gymData: GymClass): void {
    
    console.log("3",gymData);

    let headers = new Headers({ 'Content-Type': 'application/json' });
    let options = new RequestOptions({ headers: headers });

    this.http.put('http://localhost:8080/gymclasses',JSON.stringify(gymData)  ,options).subscribe(res=>{

    console.log(res);
    });

  }

/*
  deleteGymClass(id: string): Promise<any> {
    return this.http.delete(this.baseUrl + '/api/gym/' + id)
      .toPromise()
      .catch(this.handleError);
  }
*/
  private handleError(error: any): Promise<any> {
    console.error('Some error occured', error);
    return Promise.reject(error.message || error);
  } 
}