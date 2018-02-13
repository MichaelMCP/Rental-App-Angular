import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {Property} from './property'
@Injectable()
export class MyPropertiesService {
  private appUrl = '';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) { }

  getAllproperties(): Observable<Property[]>{
    return this.http.get(this.appUrl, {withCredentials: true}).map(resp => resp.json() as Property[]);
  }

  getMyProperties(ownerId: number): Observable<Property[]>{
    const url: string = this.appUrl+ '/' + ownerId;
    return this.http.get(url, {withCredentials: true})
    .map(resp => resp.json() as Property[]);

  }

  deleteProperties(property: Property) {
    const body = JSON.stringify(property);
    const url = this.appUrl + '/' + property.property_id;
    return this.http.post(url,body, {headers: this.headers, withCredentials: true})
    .subscribe(resp => console.log(resp.json()));

  }

}
