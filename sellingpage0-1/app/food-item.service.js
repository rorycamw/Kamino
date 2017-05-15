System.register([], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var FoodItemService;
    return {
        setters:[],
        execute: function() {
            FoodItemService = (function () {
                function FoodItemService() {
                    this.foodItems = [
                        {
                            id: 1,
                            name: "Acklay Roast ",
                            picture: "food/f1.png",
                            price: 3500,
                            category: "",
                            description: "The Acklay is the creature that Obi-Wan Kenobi killed in the Petranaki arena on Geonosia. Marinated in a blend of Geonosian spice, the Acklay is then slow roasted, basting in Ewok gravy"
                        },
                        {
                            id: 2,
                            name: "Aiwha Medley Hotpot",
                            picture: "food/f2.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 3,
                            name: "Fried Chiaki",
                            picture: "food/f3.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 4,
                            name: "Chiilak Prime Rib ",
                            picture: "food/f4.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 5,
                            name: "Cahuamanta ",
                            picture: "food/f5.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 6,
                            name: "Blarth Ribs",
                            picture: "food/f10.png",
                            price: 3500,
                            category: "",
                            description: ""
                        },
                        {
                            id: 7,
                            name: "Fried Demonsquid",
                            picture: "food/f11.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 8,
                            name: "Kalaide Soup",
                            picture: "food/f12.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 9,
                            name: "Steamed Basalt Clams",
                            picture: "food/f13.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }, {
                            id: 10,
                            name: "Octowhale Egg Drop Soup",
                            picture: "food/f14.png",
                            price: 3500,
                            category: "",
                            description: ""
                        }
                    ];
                }
                FoodItemService.prototype.get = function () {
                    return this.foodItems;
                };
                FoodItemService.prototype.add = function (foodItems) {
                    this.foodItems.push(foodItems);
                };
                FoodItemService.prototype.delete = function (foodItems) {
                    var index = this.foodItems.indexOf(foodItems);
                    if (index >= 0) {
                        this.foodItems.splice(index, 1);
                    }
                };
                return FoodItemService;
            }());
            exports_1("FoodItemService", FoodItemService);
        }
    }
});
//# sourceMappingURL=food-item.service.js.map