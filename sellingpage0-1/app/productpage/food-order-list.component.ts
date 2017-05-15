import { Component, Input } from '@angular/core';

import { FoodItemComponent } from './food-item.component';

@Component ({
  selector: 'fd-od-list',
  templateUrl:'app/productpage/food-order-list.component.html',
  styleUrls: ['app/productpage/food-order-list.component.css','app/productpage/food-order-list-button.component.css']
})

export class FoodOrderListComponent {
  @Input() namefoodArray;
}
