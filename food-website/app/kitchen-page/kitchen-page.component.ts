import { Component } from '@angular/core';

@Component({
    selector: 'kitchen-app',
    templateUrl: 'app/kitchen-page/kitchen-page.component.html',
    styleUrls:['app/kitchen-page/kitchen-page.component.css']
})

export class KitchenPageComponent {
    pageTitle: string = 'Kitchen Orders';
}
