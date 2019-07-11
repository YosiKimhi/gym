import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Subject } from 'rxjs/Subject';
import { User } from './UserClass';

@Injectable()
export class UserService {

  private subject = new Subject<User>();
  
  constructor() { }

  setUser(user: User) {
      this.subject.next(user);
  }

  clearUser() {
      this.subject.next();
  }

  getUser(): Observable<User> {
      return this.subject.asObservable();
  }
  
}
