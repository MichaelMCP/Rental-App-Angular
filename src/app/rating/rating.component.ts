import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { User } from '../models/index';

import { RatingService } from '../services/rating.service';

import {Property} from '../models/property';

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.css']
})
export class RatingComponent implements OnInit{
  currentUser: User;
  public RentedProperties: Property[];
  public rating: number;

  constructor(private RatingService: RatingService) {
    this.currentUser = JSON.parse(localStorage.getItem('currentUser'));
}

    ngOnInit() {
      this.RatingService.getRentedProperties().subscribe(rating =>this.RentedProperties = rating);
    }

    rate(pro: Property){
      var x = (<HTMLInputElement>document.getElementById("newRate")).value;
      this.rating = +x;
      console.log(this.rating);
      pro.rating = this.rating;
      this.RatingService.rateProperty(pro).subscribe();
    }
    
}
