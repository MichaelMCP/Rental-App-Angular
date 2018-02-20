import { Injectable } from '@angular/core';
import {Http, Headers, RequestOptions} from '@angular/http';

import {Observable} from 'rxjs/observable';
import {of} from 'rxjs/observable/of';
import 'rxjs/add/operator/map';

import { Property } from './models/property';


@Injectable()
export class RegisterPropertyService {
  //private appUrl = 'http://18.219.120.2:8080/demo/my-properties';
  private appUrl = 'http://localhost:8080/RentalProject/register-property';
  private headers = new Headers ({'Content-Type': 'application/json'});

  constructor(private http: Http) {  }

  registerProperty(address1: string, address2: string, city: string,
    states: string, currentRentPrice: number, zipcode: string,
     availability: number){
    
      const prop: Property = new Property();
      prop.address1 = address1;
      prop.address2 = address2;
      prop.city = city;
      prop.state = states;
      prop.currentRentPrice = currentRentPrice;
      prop.availability = availability;
      prop.owner = null;
      prop.rating = 0;
      prop.zipcode = zipcode;
      console.log(prop);
      this.appUrl = 'http://localhost:8080/RentalProject/register-property';

      return this.http.post(this.appUrl, prop, { headers: this.headers, withCredentials: true} )
              .map(resp => resp.json() as Property);


    // const body = JSON.stringify(property);

    // return this.http.post(this.appUrl, body, {headers: this.headers, withCredentials: true})
    // .subscribe(resp => console.log(resp.json()));

  }

}
