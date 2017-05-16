import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpModule } from '@angular/http';

import { routing } from './app.routing';


import { AppComponent } from './app.component';

import { LoginPageComponent } from './login-page/login.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { FrontPageComponent } from './front-page/front.component';
import { KitchenPageComponent } from './kitchen-page/kitchen-page.component';
import { PaymentComponent } from './payment-page/pay.component';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';
import { ReceiptPageComponent } from './receipt-page/receipt.component';
import { MenuPageComponent } from './menu-page/menu-page.component';

import { SidebarComponent } from './menu-page/sidebar-section/sidebar.component';
import { OrderListComponent } from './menu-page/order-list-section/order-list.component';
import { FoodListComponent } from './menu-page/food-list-section/food-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing,
    HttpModule
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
    ReceiptPageComponent
  ],
  providers: [  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}