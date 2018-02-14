import { Component, OnInit, Input } from '@angular/core';

import { AllPropertiesService } from '../all-properties.service';

import {Property} from '../property'
@Component({
  selector: 'app-all-properties',
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css']
})
export class AllPropertiesComponent implements OnInit {
  public AllProperties: Property[];
  constructor(
    private allPropertiesService: AllPropertiesService
  ) { }

  ngOnInit() {
    this.allPropertiesService.getAllProperties().subscribe(proList =>this.AllProperties = proList);
  }

}
