import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { PaymentComponent } from './payment-page/payment.component';
import { SidebarComponent } from './menu-page/sidebar-section/sidebar.component';
import { OrderListComponent } from './menu-page/order-list-section/order-list.component';
import { FoodListComponent } from './menu-page/food-list-section/food-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { routing } from './app.routing';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
import { KitchenPageComponent } from './kitchen-page/kitchen-page.component';

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
    KitchenPageComponent
  ],
  providers: [  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}