import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

// -- import form modules - builder
import { FormsModule } from '@angular/forms';

// -- import routing module
import { RouterModule, PreloadAllModules } from '@angular/router';

// -- import routing class
import { APPROUTES } from './routes/app.route';

// -- import bootstrap directives
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

// -- import google map plugin: you need a google API Key
import { AgmCoreModule } from '@agm/core';

// -- import text formater
import { TextMaskModule } from 'angular2-text-mask';


import { AppComponent } from './app.component';
import { GoogleMapComponent } from './google-map/google-map.component';
import { GoogleAdressComponent } from './google-adress/google-adress.component';
import { FormDataBuilderComponent } from './form-data-builder/form-data-builder.component';
import { PhoneInputComponent } from './phone-input/phone-input.component';


@NgModule({
  declarations: [
    AppComponent,
    GoogleMapComponent,
    GoogleAdressComponent,
    FormDataBuilderComponent,
    PhoneInputComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    FormsModule,
    TextMaskModule,
    NgbModule.forRoot(),
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyCLHISIRyFKWJ9XdCJ5-5S1zXZe9WywEGw',
      libraries: ["places"]
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
