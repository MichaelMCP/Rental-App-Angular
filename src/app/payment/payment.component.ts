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
  private paymentInfo: PaymentInfo;
  private user: User;
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private paymentInfoService: PaymentinfoService
  ) { }

  ngOnInit() {
  }

  PaymentInfo(): void {
    this.paymentInfoService.storePaymentInfo(this.paymentInfo)
        .subscribe(
            paymentInfo => {
            });
          }
}
