import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/index';
import {User} from './models';
import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent implements OnInit {
    public currentUser: User;
    constructor(
        private userService: UserService
    ) { }

    ngOnInit() {
      }
    isEmployee(): boolean {
        return this.userService.getCurrentUser();
    }
    logout() {
        this.userService.logout();
        localStorage.removeItem('currentUser');
    }
 }
