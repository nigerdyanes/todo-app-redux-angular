import { Injectable } from '@angular/core';
import { UserDtoCreate, UserI } from '../../auth/models/user.model';
import { v4 as uuidv4 } from 'uuid';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {


  constructor() { }

  login(user:UserI) {
    return of({
      token: 'soy_un_hash'
    });
  }

  create(user: UserDtoCreate): Observable<UserI> {
    return of({
      ...user,
      createdAt: new Date().toString(),
      id: uuidv4(),
    });   
  }
}
