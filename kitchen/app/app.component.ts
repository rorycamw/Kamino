import { Component } from '@angular/core';

@Component({
    selector: 'kitchen-app',
    template: `
        <div><h1>{{pageTitle}}</h1>
        
        <div><h1>-------</h1></div>
        <pm-products></pm-products>
        </div>
    `
})

export class AppComponent {
    pageTitle: string = 'Kitchen Orders';

}
