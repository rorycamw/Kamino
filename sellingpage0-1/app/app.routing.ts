import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page.component';
// import { ProductPageComponent } from './product-page.component';
import { TestComponent } from './test/promotion.component';
import { RayComponent } from './test2/ray.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutPageComponent},
  // { path: 'product', component:ProductPageComponent},
  { path: 'promotion', component:TestComponent },
  { path: 'test', component:RayComponent },
  { path: '', component:AboutPageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);