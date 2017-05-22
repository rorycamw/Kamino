import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { routing } from './app.routing';

import { AppComponent } from './app.component';

//Login page components
import { LoginPageComponent } from './login-page/login.component';

//About page components
import { AboutPageComponent } from './about-page/about-page.component';

//Front page components
import { FrontPageComponent } from './front-page/front.component';
import { AdOneComponent } from './front-page/ads/first/adone.component';

//Kitchen page components
import { KitchenPageComponent } from './kitchen-page/kitchen-page.component';

//Payment page components
import { PaymentComponent } from './payment-page/pay.component';

//Promotion page components
import { PromotionPageComponent } from './promotion-page/promotion-page.component';

//Receipt page components
import { ReceiptPageComponent } from './receipt-page/receipt.component';

//Menu page components
import { MenuPageComponent } from './menu-page/menu-page.component';
import { SidebarComponent } from './menu-page/sidebar-section/sidebar.component';
import { OrderListComponent } from './menu-page/order-list-section/order-list.component';
import { FoodListComponent } from './menu-page/food-list-section/food-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    FoodListComponent,
    SidebarComponent,
    PaymentComponent,
    OrderListComponent,
    AboutPageComponent,
    PromotionPageComponent,
    MenuPageComponent,
    KitchenPageComponent,
    LoginPageComponent,
    FrontPageComponent,
    ReceiptPageComponent,
    AdOneComponent
  ],
  providers: [  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}