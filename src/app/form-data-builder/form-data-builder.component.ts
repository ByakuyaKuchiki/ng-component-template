import { Component } from '@angular/core';

import {Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

// -- import feed
import { User ,USERS } from './mock';



@Component({
  selector: 'app-form-data-builder',
  templateUrl: './form-data-builder.component.html',
  styleUrls: ['./form-data-builder.component.css']
})
export class FormDataBuilderComponent {

  public model: any;
  public data: User[];

  constructor() { 
    this.data = USERS;
  }

  selection(arg: any){
    console.log(arg);
  }

  formatter = (result: User) => result.fullname;

  search = (text$: Observable<string>) =>
    text$
      .debounceTime(200)
      .distinctUntilChanged()
      .map(term => term.length < 3 ? []
        : this.data.filter(v => v.fullname.indexOf(term.toLowerCase()) > -1).slice(0, 10));

}
