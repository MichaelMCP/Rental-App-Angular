import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import {Property} from '../models/property';
@Injectable()
export class RatingService {
  private appUrl = 'http://localhost:8080/RentalProject/rating';
  private headers = new Headers ({'Content-Type': 'application/json'});
  constructor(private http: Http) { }


  getRentedProperties(): Observable<Property[]> {
    return this.http.get(this.appUrl, {withCredentials: true})
    .map(resp => resp.json() as Property[]);

  }

  rateProperty(pro: Property): Observable<{}> {
    const body = JSON.stringify(pro);
    return this.http.post(this.appUrl, body , {headers: this.headers, withCredentials: true});
  }

}
