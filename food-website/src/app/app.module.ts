import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {Routing} from './app.routing';

import {AppComponent} from './app.component';
//Login page components
import {LoginPageComponent} from './login-page/login.component';

//About page components
import {AboutPageComponent} from './about-page/about-page.component';

//Front page components
import { FrontPageComponent } from './front-page/front.component';
import { CarouselComponent } from './front-page/ads/carousel/carousel.component';
import { OneComponent } from './front-page/ads/one/one.component';
import { TwoComponent } from './front-page/ads/two/two.component';
import { ThreeComponent } from './front-page/ads/three/three.component';
import { FourComponent } from './front-page/ads/four/four.component';

//Kitchen page components
import {KitchenPageComponent} from './kitchen-page/kitchen-page.component';

//Payment page components
import {PaymentComponent} from './payment-page/pay.component';

//Promotion page components
import {PromotionPageComponent} from './promotion-page/promotion-page.component';

//Receipt page components
import {ReceiptPageComponent} from './receipt-page/receipt.component';

//Menu page components
import {MenuPageComponent} from './menu-page/menu-page.component';
import {SidebarComponent} from './menu-page/sidebar-section/sidebar.component';
import {OrderListComponent} from './menu-page/order-list-section/order-list.component';
import {FoodListComponent} from './menu-page/food-list-section/food-list.component';

//Server and database components
import {SessionService, WINDOW} from "./api/session.service";
import {ApiService} from "./api/api.service";
import {AuthService} from "./api/auth.service";
import {AuthGuard} from "./auth.guard";
import {HttpModule} from "@angular/http";


export function sessionServiceFactory(win: Window) {
    return new SessionService('api', win);
}

@NgModule({
    imports: [
        BrowserModule,
        FormsModule,
        Routing,
        HttpModule,
        ReactiveFormsModule,
    ],
    declarations: [
        AppComponent,
        FoodListComponent,
        SidebarComponent,
        PaymentComponent,
        OrderListComponent,
        AboutPageComponent,
        PromotionPageComponent,
        MenuPageComponent,
        KitchenPageComponent,
        LoginPageComponent,
        FrontPageComponent,
        ReceiptPageComponent,
        CarouselComponent,
        OneComponent,
        TwoComponent,
        ThreeComponent,
        FourComponent
    ],
    providers: [
        ApiService,
        AuthService,
        AuthGuard,
        {
            provide: SessionService,
            deps: [WINDOW],
            useFactory: sessionServiceFactory
        },
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}