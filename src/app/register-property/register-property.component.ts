import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { RegisterPropertyService } from '../register-property.service';
import { Property } from '../models/property';
@Component({
  selector: 'app-register-property',
  templateUrl: './register-property.component.html',
  styleUrls: ['./register-property.component.css']
})

export class RegisterPropertyComponent{// implements OnInit {
  model: any = {};
  returnUrl: string;
  //bean stuff
  //bean stuff
  public propertyRegister: Property; 


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private registerPropertyService: RegisterPropertyService) { }

  // ngOnInit() {
  // }

  register(){
    this.registerPropertyService.registerProperty(this.model.address1,
      this.model.address2, this.model.city, this.model.state, 
      this.model.currentRentPrice, this.model.zipcode, this.model.availability)
      .subscribe(
        property => {
          this.propertyRegister = property;

          if(property == null){
            this.router.navigate(['/home']);
          }else{
            this.router.navigate(['/home']);
          }
        }
      );
  }

}
