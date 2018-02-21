import { Routes } from '@angular/router';

// -- components
import { GoogleMapComponent } from '../google-map/google-map.component';
import { GoogleAdressComponent } from '../google-adress/google-adress.component';
import { FormDataBuilderComponent } from '../form-data-builder/form-data-builder.component';

export const APPROUTES: Routes = [
  { path: '', component: GoogleMapComponent },
  { path: 'adress', component: GoogleAdressComponent },
  { path: 'form', component: FormDataBuilderComponent }
];
