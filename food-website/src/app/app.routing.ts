import {Routes, RouterModule} from '@angular/router';

import {AboutPageComponent} from './about-page/about-page.component';
import {PromotionPageComponent} from './promotion-page/promotion-page.component';
import {MenuPageComponent} from './menu-page/menu-page.component';
import {KitchenPageComponent} from './kitchen-page/kitchen-page.component';
import {LoginPageComponent} from './login-page/login.component';
import {FrontPageComponent} from './front-page/front.component';
import {PaymentComponent} from './payment-page/pay.component';
import {ReceiptPageComponent} from './receipt-page/receipt.component';
import {AuthGuard} from "./auth.guard";

import { OneComponent } from './front-page/ads/one/one.component';
import { TwoComponent } from './front-page/ads/two/two.component';
import { ThreeComponent } from './front-page/ads/three/three.component';
import { FourComponent } from './front-page/ads/four/four.component';

const appRoutes: Routes = [
    {path: '', component: FrontPageComponent},
    {path: 'promotion', component: PromotionPageComponent},
    {path: 'menu', component: MenuPageComponent},
    {path: 'about', component: AboutPageComponent},
    {path: 'kitchen', component: KitchenPageComponent, canActivate: [AuthGuard]},
    {path: 'receipt', component: ReceiptPageComponent, canActivate: [AuthGuard]},
    {path: 'payment', component: PaymentComponent},
    {path: 'login', component: LoginPageComponent},
    {path: 'logout', component: LoginPageComponent},
    {path: 'lego', component:OneComponent},
    {path: 'rory', component:TwoComponent},
    {path: 'badger', component:ThreeComponent},
    {path: 'narwhals', component:FourComponent}
];

export const Routing = RouterModule.forRoot(appRoutes);