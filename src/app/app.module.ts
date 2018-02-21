import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -- import bootstrap directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// -- import google map plugin: you need a google API Key
import { AgmCoreModule } from '@agm/core';


import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLHISIRyFKWJ9XdCJ5-5S1zXZe9WywEGw'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
