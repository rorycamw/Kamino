import { Routes, RouterModule } from '@angular/router';

import { AboutPageComponent } from './about-page/about-page.component';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { KitchenPageComponent } from './kitchen-page/kitchen-page.component';
import { LoginPageComponent } from './login-page/login.component';
import { FrontPageComponent } from './front-page/front.component';
import { PaymentComponent } from './payment-page/pay.component';
import { ReceiptPageComponent } from './receipt-page/receipt.component';
import { VideoOneComponent } from './front-page/ads/vids/vid1/vid1.component';
import { VideoTwoComponent } from './front-page/ads/vids/vid2/vid2.component';

const appRoutes: Routes = [
  { path: '', component:FrontPageComponent },
  { path: 'promotion', component:PromotionPageComponent },
  { path: 'menu', component:MenuPageComponent },
  { path: 'about', component: AboutPageComponent},
  { path: 'kitchen', component:KitchenPageComponent },
  { path: 'receipt', component:ReceiptPageComponent},
  { path: 'payment', component:PaymentComponent},
  { path: 'login', component:LoginPageComponent},
  { path: 'troll', component:VideoOneComponent},
  { path: 'trolly', component:VideoTwoComponent}

];

export const routing = RouterModule.forRoot(appRoutes);