import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../services/index';

import { UserService } from '../services/index';
import { User } from '../models';
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
    public loggedUser: User;

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
        // this.userService.login(null, null).subscribe( user => {
        //     this.loggedUser = user; });
    }

    // login1() {
    //     this.loading = true;
    //     this.authenticationService.login(this.model.email, this.model.password)
    //         .subscribe(
    //             data => {
    //                 this.router.navigate([this.returnUrl]);
    //             },
    //             error => {
    //                 this.alertService.error(error);
    //                 this.loading = false;
    //             });
    // }


    login(): void {
        this.userService.login(this.model.email, this.model.password)
        .subscribe( user => {
            console.log(this.model.email);
            console.log(this.model.password);
          this.loggedUser = user;

          console.log(user);
          if (user == null) {
            console.log('hello1');
            this.router.navigateByUrl('/login');
          } else {
              console.log('hello');
              localStorage.setItem('currentUser', JSON.stringify(user));
              this.userService.getCurrentUser();
            this.router.navigateByUrl('/home');
          }


          console.log(this.loggedUser);
        });

      }

//     logout(): void {
//         this.userService.logout()
//         .subscribe();
//         this.loggedUser = null;
//         this.email = null;
//         this.password = null;
//       }
}
