import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';


const appRoutes: Routes = [
  { path: 'about', component: AboutPageComponent},
  { path: 'promotion', component:PromotionPageComponent },
  { path: 'menu', component:MenuPageComponent },
  { path: '', component:AboutPageComponent }
];

export const routing = RouterModule.forRoot(appRoutes);