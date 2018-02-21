import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -- import routing module
import { RouterModule, PreloadAllModules } from '@angular/router';

// -- import routing class
import { APPROUTES } from './routes/app.route';

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
    }),
    RouterModule.forRoot(APPROUTES, {
      useHash: Boolean(history.pushState) === false,
      preloadingStrategy: PreloadAllModules
  }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
