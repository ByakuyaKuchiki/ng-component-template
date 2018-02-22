import { Component, OnInit } from '@angular/core';

import { Phonedata, PHONEDATA } from './phone.format';

@Component({
  selector: 'app-phone-input',
  templateUrl: './phone-input.component.html',
  styleUrls: ['./phone-input.component.css']
})
export class PhoneInputComponent implements OnInit {

  public mask: any[];
  private defaultMask: any[] = ['+', '1', ' ', '(', /[1-9]/, /\d/, /\d/, ')', ' ', /\d/, /\d/, /\d/, '-', /\d/, /\d/, /\d/, /\d/];

  public contry = PHONEDATA;

  constructor() { 
    this.mask = this.defaultMask;
  }
  

  ngOnInit() {
  }

}
