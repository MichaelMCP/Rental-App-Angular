import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {User} from '../models';

@Injectable()
export class EditUserService {
  private appUrl = 'http://localhost:8080/RentalProject/editUsers';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) { }

  getAllUser(): Observable<User[]>{
    return this.http.get(this.appUrl, {withCredentials: true})
    .map(resp => resp.json() as User[]);
  }
  deleteProperties(u: User): Observable<{}> {
    const body = JSON.stringify(u);
    return this.http.post(this.appUrl,body ,{headers: this.headers, withCredentials: true});
  }

}
