import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page.component';
import { ProductPageComponent } from './product-page.component';

const appRoutes: Routes = [
  { path: 'about', component: AboutPageComponent},
  { path: 'product', component:ProductPageComponent},
  { path: '', component:ProductPageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);