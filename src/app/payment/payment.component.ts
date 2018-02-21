import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PaymentinfoService } from '../services/paymentinfo.service';
import { PaymentInfo, User, RentTransaction } from '../models';
import { Property } from '../models/property';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private paymentInfo: PaymentInfo = new PaymentInfo();
  private rentTransaction: RentTransaction = new RentTransaction();
  private cc: number;
  private cvv: number;
  private ed: string;
  private user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentInfoService: PaymentinfoService
  ) { }

  ngOnInit() {
    this.user = JSON.parse(localStorage.getItem('currentUser'));
    console.log(JSON.parse(localStorage.getItem('propertyId')));
    this.rentTransaction.property = new Property();
    this.rentTransaction.property.propertyId = +JSON.parse(localStorage.getItem('propertyId'));
    this.rentTransaction.startdate = JSON.parse(localStorage.getItem('startDate'));
    this.rentTransaction.enddate = JSON.parse(localStorage.getItem('endDate'));
    this.rentTransaction.renter = this.user;
    this.paymentInfo.cc = '0000-0000-0000-0000';
    this.paymentInfo.user = this.user;
    this.paymentInfo.cvv = 999;
    this.paymentInfo.ed = 'Enter Date';
    console.log(this.paymentInfo);
    console.log(this.rentTransaction);
  }

  PaymentInfo(): void {
    this.paymentInfoService.storePaymentInfo(this.paymentInfo)
        .subscribe(
            paymentInfo => {
            });
          }

  RentTransactionInfo(): void {
    this.paymentInfoService.storeRentTransactionInfo(this.rentTransaction)
        .subscribe(
            rentTransaction => {
              this.rentTransaction = rentTransaction;
              this.router.navigate(['/home']);
            });
          }
}
