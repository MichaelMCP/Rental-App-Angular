import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {Property} from '../models/property';

@Injectable()
export class MyPropertiesService {
  private appUrl = 'http://localhost:8080/RentalProject/my-properties';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getMyProperties(): Observable<Property[]> {
    return this.http.get(this.appUrl, {withCredentials: true})
    .map(resp => resp.json() as Property[]);

  }

  deleteProperties(pro: Property): Observable<{}> {
    const body = JSON.stringify(pro);
    return this.http.post(this.appUrl, body , {headers: this.headers, withCredentials: true});
  }

}
