import { Injectable } from '@angular/core';

@Injectable()
export class NavabrService {
  visiable: boolean;

  constructor() {this.visiable = false;}
  hide(){
    this.visiable = false;
  }
  show(){
    this.visiable = true;
  }
  toggle()
  {
    this.visiable = !this.visiable;
  }

}
