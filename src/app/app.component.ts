import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/index';
import {User} from './models';
import '../assets/app.css';
import { Router, ActivatedRoute, NavigationStart } from '@angular/router';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    public currentUser: User;
    constructor(
        private userService: UserService,
        private router: Router
    ) { }

    ngOnInit() {
        this.router.events.subscribe(event => {
            if (event instanceof NavigationStart) {
                if ( this.getCurrentUser()) {
                    document.getElementById('Navin').style.display = 'block';
                } else {
                    document.getElementById('Navin').style.display = 'none';
                }
                console.log(document.location);
            }
        });
        // else {
        //     document.getElementById('Navin').style.display = 'block'
        // }
      }
    isEmployee(): boolean {
        return this.userService.getCurrentUser();
    }
    logout() {
        this.userService.logout();
        localStorage.removeItem('currentUser');
        this.router.navigateByUrl('/login');
    }
    getCurrentUser(): boolean {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
        if (this.currentUser === null ) {
            return false;
        }
        return true;
    }
 }
