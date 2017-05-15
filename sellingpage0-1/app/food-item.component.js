System.register(['@angular/core'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1;
    var FoodItemComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            FoodItemComponent = (function () {
                function FoodItemComponent() {
                    this.search = new core_1.EventEmitter();
                    this.totalOrder = 1;
                }
                FoodItemComponent.prototype.addInList = function (foodname, foodprice, total) {
                    this.totalOrder++;
                    this.addedItem = {
                        name: foodname,
                        price: foodprice,
                        totalOrder: total
                    };
                    this.search.emit(this.addedItem);
                };
                __decorate([
                    core_1.Input(), 
                    __metadata('design:type', Object)
                ], FoodItemComponent.prototype, "itemList", void 0);
                __decorate([
                    core_1.Output(), 
                    __metadata('design:type', Object)
                ], FoodItemComponent.prototype, "search", void 0);
                FoodItemComponent = __decorate([
                    core_1.Component({
                        selector: 'mw-food-item',
                        templateUrl: 'app/food-item.component.html',
                        styleUrls: ['app/food-item.component.css']
                    }), 
                    __metadata('design:paramtypes', [])
                ], FoodItemComponent);
                return FoodItemComponent;
            }());
            exports_1("FoodItemComponent", FoodItemComponent);
        }
    }
});
//# sourceMappingURL=food-item.component.js.map