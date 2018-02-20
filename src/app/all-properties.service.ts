import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {Property} from './models/property'
@Injectable()
export class AllPropertiesService {
  private appUrl = 'http://localhost:8080/RentalProject/Properties';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getAllProperties(): Observable<Property[]> {
    return this.http.get(this.appUrl, {withCredentials: true})
    .map(resp => resp.json() as Property[]);

  }

}
