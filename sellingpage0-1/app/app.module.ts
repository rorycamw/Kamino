import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { ReceiptComponent } from './receipt-page/receipt.component';

import { FoodItemComponent } from './productpage/food-item.component';
import { SidebarComponent } from './productpage/sidebar.component';
import { FoodItemService } from './productpage/food-item.service';
import { FoodOrderListComponent } from './productpage/food-order-list.component';
import [ MenubarAllComponent ] from './menubar/menu-bar-all.component';
import [ MenubarFrontComponent ] from './menubar/menu-bar-front.component';
=======
import { FoodListComponent } from './menu-page/food-list-section/food-list.component';
import { SidebarComponent } from './menu-page/sidebar-section/sidebar.component';
import { FoodListService } from './menu-page/food-list-section/food-list.service';
import { OrderListComponent } from './menu-page/order-list-section/order-list.component';
import { AboutPageComponent } from './about-page/about-page.component';
import { routing } from './app.routing';
import { PromotionPageComponent } from './promotion-page/promotion-page.component';
import { MenuPageComponent } from './menu-page/menu-page.component';
>>>>>>> 364db581b9f66a4ba934f164c6b120d1eedf1cf8

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
    ReceiptComponent,
    FoodOrderListComponent,
    MenubarAllComponent,
    MenubarFrontComponent
=======
    OrderListComponent,
    AboutPageComponent,
    PromotionPageComponent,
    MenuPageComponent
>>>>>>> 364db581b9f66a4ba934f164c6b120d1eedf1cf8
  ],
  providers: [
    FoodListService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}