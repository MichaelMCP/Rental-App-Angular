import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { Observable } from 'rxjs/observable';
import { of } from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { User } from '../models/index';

@Injectable()
export class UserService {
<<<<<<< HEAD
    private appUrl = 'http://18.219.120.2:8080/login';
=======
    private appUrl = 'http://18.219.120.2:8080/demo/login';
>>>>>>> 813bab7d0c0c20928d8f9fa2524e85a648b87ca1
    private headers = new Headers({
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded'});
    private user: User;
    constructor(private http: Http) { }

    login(email: string, password: string): Observable<User> {

      console.log(email);
      console.log(password);
        if (email && password) {
          const body = `user=${email}&pass=${password}`;
          return this.http.post(this.appUrl, body, { withCredentials: false })
            .map(
            resp => {
              const user: User = resp.json() as User;
              console.log(user);
              return user;
            }
            );
        } else {
          return this.http.get(this.appUrl, { withCredentials: true })
          .map(
            resp => {
              const user: User = resp.json() as User;
              console.log(user);
              return user;
            }
          );
        }
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
