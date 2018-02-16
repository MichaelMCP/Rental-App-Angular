import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { UserService } from '../services/index';
import { User } from '../models';

import { AlertService } from '../services/index';

@Component({
  selector: 'app-register',
  moduleId: module.id.toString(),
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  model: any = {};
  returnUrl: string;
  private email: string;
  private password: string;
  private fullName: string;
  private role: number;
  public loggedUser: User;

    constructor(
      private route: ActivatedRoute,
      private router: Router,
      private alertService: AlertService,
      private userService: UserService) { }

    // tslint:disable-next-line:use-life-cycle-interface
    ngOnInit() {
    }
    register() {
      this.userService.register(this.model.email, this.model.password, this.model.fullName, this.model.role)
          .subscribe(
              user => {
                  this.loggedUser = user;

                  if (user == null) {
                    this.router.navigate(['/login']);
                  } else {
                    this.router.navigate(['/login']);
                  }
              });
  }
}
