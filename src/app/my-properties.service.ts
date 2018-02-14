import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {Property} from './property'
@Injectable()
export class MyPropertiesService {
  private appUrl = 'http://18.219.120.2:8080/my-properties';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getMyProperties(): Observable<Property[]>{
    return this.http.get(this.appUrl, {withCredentials: true})
    .map(resp => resp.json() as Property[]);

  }

  deleteProperties(property: Property) {
    const body = JSON.stringify(property);
    const url = this.appUrl + '/' + property.property_id;
    return this.http.post(url,body, {headers: this.headers, withCredentials: true})
    .subscribe(resp => console.log(resp.json()));

  }

}
