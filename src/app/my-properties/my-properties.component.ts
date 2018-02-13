import { Component, OnInit, Input } from '@angular/core';

import { MyPropertiesService } from '../my-properties.service';
@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  constructor(
  ) { }

  ngOnInit() {
  }

}
