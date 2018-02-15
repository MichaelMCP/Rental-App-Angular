import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { User } from '../models/index';
import { NewUser } from '../models/newUser';

@Injectable()
export class UserService {
    // private appUrl = 'http://18.219.120.2:8080/demo/login';
    private appUrl = 'http://localhost:8080/RentalProject/login';
    private headers = new Headers({'Content-Type': 'application/json'});
    private user: User;
    constructor(private http: Http) { }

    login(email: string, password: string): Observable<User> {
      console.log(email);
      console.log(password);
      const nu: User = new User();
      nu.email = email;
      nu.pass = password;
      return this.http.post(this.appUrl, nu, { headers: this.headers, withCredentials: true} ).map(resp => resp.json() as User);
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
