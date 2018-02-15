import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { User } from '../models/index';
import { NewUser } from '../models/newUser';

@Injectable()
export class UserService {
    private appUrl = 'http://localhost:8080/RentalProject/login';
    private headers = new Headers({'Content-Type': 'application/json'});
    private user: User;
    constructor(private http: Http) { }

    login(email: string, password: string) {
      console.log(email);
      console.log(password);
      const nu: NewUser = new NewUser();
      nu.email = email;
      nu.password = password;
      return this.http.post(this.appUrl,  { headers: Headers, withCredentials: true} ).map(resp => resp.json() as NewUser);
    }

      logout(): Observable<number> {
        console.log('logout called');
        return this.http.delete(this.appUrl, { withCredentials: true })
          .map(
          success => {
            this.user = null;
            return success.status;
          }
          );
      }

    // getAll() {
    //     return this.http.get<User[]>('/api/users');
    // }

    getById(id: number) {
        return this.http.get('/api/users/' + id);
    }

    create(user: User) {
        return this.http.post('/api/users', user);
    }

    update(user: User) {
        return this.http.put('/api/users/' + user.id, user);
    }

    delete(id: number) {
        return this.http.delete('/api/users/' + id);
    }
}
