import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page.component';
import { ProductPageComponent } from './product-page.component';
import { TestComponent } from './test/promotion.component';
const appRoutes: Routes = [
  { path: 'about', component: AboutPageComponent},
  { path: 'product', component:ProductPageComponent},
  { path: 'promotion', component:TestComponent },
  { path: '', component:ProductPageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);