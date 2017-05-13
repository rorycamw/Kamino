import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { FoodItemComponent } from './food-item.component';
import { SidebarComponent } from './sidebar.component';
import { FoodItemService } from './food-item.service';
import { FoodOrderListComponent } from './food-order-list.component';
import { AboutPageComponent } from './about-page.component';
import { routing } from './app.routing';
import { ProductPageComponent } from './product-page.component';
import { TestComponent } from './test/promotion.component';


@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    routing
    ],
  declarations: [
    AppComponent,
    FoodItemComponent,
    SidebarComponent,
    FoodOrderListComponent,
    AboutPageComponent,
    ProductPageComponent,
    TestComponent
  ],
  providers: [
    FoodItemService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}