import { Component, Input } from '@angular/core';

import { FoodItemComponent } from './food-item.component';

@Component ({
  selector: 'fd-od-list',
  templateUrl:'app/food-order-list.component.html',
  styleUrls: ['app/food-order-list.component.css','app/food-order-list-button.component.css']
})

export class FoodOrderListComponent {
  @Input() namefoodArray;
}
