import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item.component';
import { SidebarComponent } from './sidebar.component';
import { FoodItemService } from './food-item.service';
import { FoodOrderListComponent } from './food-order-list.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule
  ],
  declarations: [
    AppComponent,
    FoodItemComponent,
    SidebarComponent,
    FoodOrderListComponent
  ],
  providers: [
    FoodItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}