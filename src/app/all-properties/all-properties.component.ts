import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { AllPropertiesService } from '../all-properties.service';

<<<<<<< HEAD
import {Property} from '../property';
=======
import {Property} from '../models/property'
>>>>>>> e047a168d345396c9ebeaeef094b939ce4c3474c
@Component({
  selector: 'app-all-properties',
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css']
})
export class AllPropertiesComponent implements OnInit {
  model: any = {};
  loading = false;
  public AllProperties: Property[];
  public test = '60';
  constructor(
    private allPropertiesService: AllPropertiesService,
    private router: Router
  ) { }

  ngOnInit() {
    this.allPropertiesService.getAllProperties().subscribe(allpro => this.AllProperties = allpro);
    // This runs when you click a button.
    console.log((<HTMLInputElement>document.getElementById('startDate')).value);
    document.addEventListener('click', function(e) {
      if ((<HTMLInputElement>e.target).className === 'btn btn-primary' && (!(<HTMLInputElement>document.getElementById('startDate')).value
      || !(<HTMLInputElement>document.getElementById('endDate')).value)) {
        alert('Please enter a valid start and end date to continue!');
      }
      if ((<HTMLInputElement>e.target).className === 'btn btn-primary' && ((<HTMLInputElement>document.getElementById('startDate')).value
      && ((<HTMLInputElement>document.getElementById('endDate')).value ))) {
       alert('You have chosen to rent from ' + (<HTMLInputElement>document.getElementById('startDate')).value + ' to ' +
       (<HTMLInputElement>document.getElementById('endDate')).value);
       console.log((<HTMLInputElement>e.target).name);
       localStorage.setItem('propertyId', JSON.stringify((<HTMLInputElement>e.target).name));
       localStorage.setItem('startDate', JSON.stringify((<HTMLInputElement>document.getElementById('startDate')).value));
       localStorage.setItem('endDate', JSON.stringify((<HTMLInputElement>document.getElementById('endDate')).value));
       window.location.href = '/payment';
      }
    });
    }

  }
  function rentMe() {
    console.log(this.value);
  }
