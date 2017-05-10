import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'mw-food-item',
  templateUrl: 'app/food-item.component.html',
  styleUrls: ['app/food-item.component.css']
})
export class FoodItemComponent {
  @Input() itemList;
  @Output() search = new EventEmitter();

  totalOrder = 1;

  addedItem;

  
  

  addInList(foodname: string,foodprice: number, total:number){
    this.totalOrder++;
    this.addedItem={
      name:foodname,
      price:foodprice,
      totalOrder:total
    }
    
    this.search.emit(this.addedItem);
  }
}
