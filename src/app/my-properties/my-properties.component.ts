import { Component, OnInit, Input } from '@angular/core';

import { MyPropertiesService } from '../my-properties.service';

import {Property} from '../property'
@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  public myProperties: Property[];
  constructor(
    private myPropertiesService: MyPropertiesService
  ) { }

  ngOnInit() {
    this.myPropertiesService.getMyProperties().subscribe(proList =>this.myProperties = proList);
  }

}
