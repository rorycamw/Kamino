"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var ProductComponent = (function () {
    function ProductComponent() {
        this.pageTitle = 'List of orders!';
        this.imageWidth = 50;
        this.imageMargin = 2;
        this.showImage = false;
        this.listFilter = '';
        this.products = [
            {
                "productId": 1,
                "productName": "chicken fingers",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2016",
                "description": "Leaf rake with 48-inch wooden handle.",
                "price": 19.95,
                "starRating": 3.2,
                "imageUrl": "http://akns-images.eonline.com/eol_images/Entire_Site/20151121/rs_560x415-151221114306-560.sticks.cm.122115.jpg"
            },
            {
                "productId": 2,
                "productName": "taco",
                "productCode": "GDN-0023",
                "releaseDate": "March 18, 2016",
                "description": "15 gallon capacity rolling garden cart",
                "price": 32.99,
                "starRating": 4.2,
                "imageUrl": "http://s.eatthis-cdn.com/media/images/ext/456192467/healthy-fast-food-jack-in-the-box.jpg"
            },
            {
                "productId": 5,
                "productName": "subway",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2016",
                "description": "Curved claw steel hammer",
                "price": 8.9,
                "starRating": 4.8,
                "imageUrl": "http://s.eatthis-cdn.com/media/images/ext/411918023/healthy-fast-food-subway.jpg"
            },
            {
                "productId": 8,
                "productName": "french toast",
                "productCode": "TBX-0022",
                "releaseDate": "May 15, 2016",
                "description": "15-inch steel blade hand saw",
                "price": 11.55,
                "starRating": 3.7,
                "imageUrl": "https://assets.entrepreneur.com/images/misc/1481833301_sonic-french-toast.jpg"
            },
            {
                "productId": 10,
                "productName": "pizza",
                "productCode": "GMG-0042",
                "releaseDate": "October 15, 2015",
                "description": "Standard two-button video game controller",
                "price": 35.95,
                "starRating": 4.6,
                "imageUrl": "http://i.huffpost.com/gen/1029310/images/r-FAST-FOOD-CALORIES-large570.jpg"
            }
        ];
    }
    ProductComponent.prototype.switchImage = function () {
        this.showImage = !this.showImage;
    };
    ProductComponent.prototype.ngOnInit = function () {
        console.log("In OnInit");
    };
    return ProductComponent;
}());
ProductComponent = __decorate([
    core_1.Component({
        selector: 'pm-products',
        moduleId: module.id,
        templateUrl: 'products.component.html',
        styleUrls: ['products.component.css']
    })
], ProductComponent);
exports.ProductComponent = ProductComponent;
//# sourceMappingURL=products.component.js.map