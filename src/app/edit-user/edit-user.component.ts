import { Component, OnInit } from '@angular/core';

import { EditUserService } from '../services/edit-user.service';

import {User} from '../models/user';
@Component({
  selector: 'app-edit-user',
  templateUrl: './edit-user.component.html',
  styleUrls: ['./edit-user.component.css']
})
export class EditUserComponent implements OnInit {
  public allUser: User[];
  constructor(
    private editUserSerivce: EditUserService
  ) { }

  ngOnInit() {
    this.editUserSerivce.getAllUser().subscribe(proList => this.allUser = proList);
  }

  deleteUser(u: User): void {
    this.allUser.splice(this.allUser.indexOf(u), 1);
    this.editUserSerivce.deleteProperties(u).subscribe();
  }

}
