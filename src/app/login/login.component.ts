import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';

import { UserService } from '../services/index';
import { User } from '../models';
<<<<<<< HEAD
import { NewUser } from '../models';
=======
<<<<<<< HEAD
=======
import { NewUser } from '../models/newUser';

>>>>>>> a696f66be0ea1a91a846d5492730689a20d5103b
>>>>>>> 276ff5273b5addd3cf2b04778bd9bc8d26bf94ab
@Component({
    selector: 'app-login',
    moduleId: module.id.toString(),
    templateUrl: './login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;
    private email: string;
    private password: string;
    public loggedUser: NewUser;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService,
        private userService: UserService
     ) { }

    ngOnInit() {
        // reset login status
        // this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        // this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';

        this.userService.login(null, null).subscribe( user => {
            this.loggedUser = user; });
    }

    login1() {
        this.loading = true;
        this.authenticationService.login(this.model.email, this.model.password)
            .subscribe(
                data => {
                    this.router.navigate([this.returnUrl]);
                },
                error => {
                    this.alertService.error(error);
                    this.loading = false;
                });
    }

    login(): void {
        this.userService.login(this.model.email, this.model.password)
        .subscribe( user => {
            console.log(this.model.email);
            console.log(this.model.password);
          this.loggedUser = user;
          console.log(this.loggedUser);
        });
      }

    logout(): void {
        this.userService.logout()
        .subscribe();
        this.loggedUser = null;
        this.email = null;
        this.password = null;
      }
}
