import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { PaymentinfoService } from '../services/paymentinfo.service';
import { PaymentInfo, User } from '../models';

@Component({
  selector: 'app-payment',
  templateUrl: './payment.component.html',
  styleUrls: ['./payment.component.css']
})
export class PaymentComponent implements OnInit {
  private paymentInfo: PaymentInfo = new PaymentInfo();
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
    this.paymentInfo.cc = '0000-0000-0000-0000';
    this.paymentInfo.cvv = 999;
    this.paymentInfo.ed = 'Enter Date';
    console.log(this.paymentInfo);
  }

  PaymentInfo(): void {
    this.paymentInfoService.storePaymentInfo(this.paymentInfo)
        .subscribe(
            paymentInfo => {
            });
          }
}
