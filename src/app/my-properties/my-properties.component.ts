import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { MyPropertiesService } from '../services/my-properties.service';

import {Property} from '../models/property'
@Component({
  selector: 'app-my-properties',
  templateUrl: './my-properties.component.html',
  styleUrls: ['./my-properties.component.css']
})
export class MyPropertiesComponent implements OnInit {
  public myProperties: Property[];
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private myPropertiesService: MyPropertiesService
  ) { }

  ngOnInit() {
    this.myPropertiesService.getMyProperties().subscribe(proList => this.myProperties = proList);

  }
  deletePro(pro: Property): void {
    this.myProperties.splice(this.myProperties.indexOf(pro), 1);
    this.myPropertiesService.deleteProperties(pro).subscribe();
  }
}


