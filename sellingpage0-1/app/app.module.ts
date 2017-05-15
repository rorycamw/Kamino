import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodItemComponent } from './productpage/food-item.component';
import { SidebarComponent } from './productpage/sidebar.component';
import { FoodItemService } from './productpage/food-item.service';
import { FoodOrderListComponent } from './productpage/food-order-list.component';
import [ MenubarAllComponent ] from './menubar/menu-bar-all.component';
import [ MenubarFrontComponent ] from './menubar/menu-bar-front.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodItemComponent,
    SidebarComponent,
    FoodOrderListComponent,
    MenubarAllComponent,
    MenubarFrontComponent
  ],
  providers: [
    FoodItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}