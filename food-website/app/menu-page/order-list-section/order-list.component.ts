import { Component, Input } from '@angular/core';

import { FoodListComponent } from '../food-list-section/food-list.component';

@Component ({
  selector: 'fd-od-list',
  templateUrl:'app/menu-page/order-list-section/order-list.component.html',
  styleUrls: ['app/menu-page/order-list-section/order-list.component.css','app/menu-page/order-list-section/order-list-button.component.css']
})

export class OrderListComponent {
  @Input() namefoodArray;
}
