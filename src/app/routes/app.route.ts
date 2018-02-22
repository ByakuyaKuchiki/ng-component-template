import { Routes } from '@angular/router';

// -- components
import { GoogleMapComponent } from '../google-map/google-map.component';
import { GoogleAdressComponent } from '../google-adress/google-adress.component';
import { FormDataBuilderComponent } from '../form-data-builder/form-data-builder.component';
import { PhoneInputComponent } from '../phone-input/phone-input.component';

export const APPROUTES: Routes = [
  { path: '', component: GoogleMapComponent },
  { path: 'adress', component: GoogleAdressComponent },
  { path: 'form', component: FormDataBuilderComponent },
  { path: 'phone', component: PhoneInputComponent }
];
