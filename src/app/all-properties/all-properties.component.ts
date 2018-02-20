import { Component, OnInit, Input } from '@angular/core';

import { AllPropertiesService } from '../all-properties.service';

import {Property} from '../models/property'
@Component({
  selector: 'app-all-properties',
  templateUrl: './all-properties.component.html',
  styleUrls: ['./all-properties.component.css']
})
export class AllPropertiesComponent implements OnInit {
  public AllProperties: Property[];
  public test = '60';
  constructor(
    private allPropertiesService: AllPropertiesService
  ) { }

  ngOnInit() {
    this.allPropertiesService.getAllProperties().subscribe(allpro =>this.AllProperties = allpro);
    // This runs when you click a button.
    document.addEventListener('click', function(e){
      if(e.target.className=="btn btn-primary" && (!document.getElementById('startDate').value || !document.getElementById('endDate').value)){
        alert('Please enter a valid start and end date to continue!');
      }
      if(e.target.className=="btn btn-primary" && document.getElementById('startDate').value && document.getElementById('endDate').value ){
       alert('You have chosen to rent from ' + document.getElementById('startDate').value + ' to ' +
       document.getElementById('endDate').value);
       console.log(e.target.name);
       localStorage.setItem('propertyId', JSON.stringify(e.target.name));
       localStorage.setItem('startDate', JSON.stringify(document.getElementById('startDate').value));
       localStorage.setItem('endDate', JSON.stringify(document.getElementById('endDate').value));
       window.location.href = '/payment'; 
      }
    });
    }

  }
  function rentMe(){
    console.log(this.value);
  }

