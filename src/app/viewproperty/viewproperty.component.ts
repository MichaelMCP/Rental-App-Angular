import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { User } from '../models/index';
import { UserService } from '../services/index';

@Component({
    selector: 'app-home',
    moduleId: module.id.toString(),
    templateUrl: './viewproperty.component.html'
})

export class ViewpropertyComponent implements OnInit {
    currentUser: User;
    users: User[] = [];

    constructor(private userService: UserService) {
        this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
    }

    ngOnInit() {
        // this.loadAllUsers();
    }

    deleteUser(id: number) {
       // this.userService.delete(id).subscribe(() => { this.loadAllUsers(); });
    }

    // private loadAllUsers() {
    //     this.userService.getAll().subscribe(users => { this.users = users; });
    // }
}