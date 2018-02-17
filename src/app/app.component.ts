import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserService } from './services/index';
import '../assets/app.css';

@Component({
    moduleId: module.id.toString(),
    selector: 'app-root',
    templateUrl: 'app.component.html'
})

export class AppComponent {
    constructor(
        private userService: UserService
    ) { }
    logout() {
        this.userService.logout();
        localStorage.removeItem('currentUser');
    }
 }
