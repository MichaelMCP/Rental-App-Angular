import { Injectable } from '@angular/core';
import { Headers, Http } from '@angular/http';

import { RentTransaction, PaymentInfo } from '../models/index';

@Injectable()
export class PaymentinfoService {

  private appUrl = 'http://localhost:8080/RentalProject';
  private headers = new Headers({'Content-Type': 'application/json'});
  private paymentInfo: PaymentInfo;
  private rentTransaction: RentTransaction;
  constructor(private http: Http) { }

  storePaymentInfo(paymentInfo: PaymentInfo) {
    this.appUrl = 'http://localhost:8080/RentalProject/payment';
    console.log(paymentInfo);
    return this.http.post(this.appUrl, paymentInfo, { headers: this.headers, withCredentials: true} )
    .map(resp => resp.json() as PaymentInfo);
  }

  storeRentTransactionInfo(rentTransaction: RentTransaction) {
    this.appUrl = 'http://localhost:8080/RentalProject/rentTransaction';
    console.log(rentTransaction);
    return this.http.post(this.appUrl, RentTransaction, { headers: this.headers, withCredentials: true} )
    .map(resp => resp.json() as RentTransaction);
  }
}
