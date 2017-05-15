import { Component, Input } from '@angular/core';

@Component({
  selector:'ray-app',
  templateUrl:'app/menu-page/menu-page.component.html',
  styleUrls:['app/menu-page/menu-page.component.css',
            'app/menu-page/menu-page.component2.css',
            'app/menu-page/menu-page.component3.css']
})

export class MenuPageComponent{
  addeditemArray =[];
  haha(event){
  this.addeditemArray.push(event);
  console.log(event);
}


  foodItems = [
    {
      id: 1,
      name: "Acklay Roast ",
      picture:"food/f1.png",
      price:3500,
      category: "",
      description: "The Acklay is the creature that Obi-Wan Kenobi killed in the Petranaki arena on Geonosia. Marinated in a blend of Geonosian spice, the Acklay is then slow roasted, basting in Ewok gravy"
    },
    {
      id: 2,
      name: "Aiwha Medley Hotpot",
      picture:"food/f2.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 3,
      name: "Fried Chiaki",
      picture:"food/f3.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 4,
      name: "Chiilak Prime Rib ",
      picture:"food/f4.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 5,
      name: "Cahuamanta ",
      picture:"food/f5.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 6,
      name: "Blarth Ribs",
      picture:"food/f10.png",
      price:3500,
      category: "",
      description: ""
    },
    {
      id: 7,
      name: "Fried Demonsquid",
      picture:"food/f11.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 8,
      name: "Kalaide Soup",
      picture:"food/f12.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 9,
      name: "Steamed Basalt Clams",
      picture:"food/f13.png",
      price:3500,
      category: "",
      description: ""
    }, {
      id: 10,
      name: "Octowhale Egg Drop Soup",
      picture:"food/f14.png",
      price:3500,
      category: "",
      description: ""
    }
  ];
}