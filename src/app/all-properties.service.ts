import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {Property} from './property'
@Injectable()
export class AllPropertiesService {
  private appUrl = 'http://18.219.120.2:8080/demo/all-properties';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getAllProperties(): Observable<Property[]>{
    return this.http.get(this.appUrl, {withCredentials: true})
    .map(resp => resp.json() as Property[]);

  }

}