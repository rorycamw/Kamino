import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    selector: 'pay-page',
    templateUrl: 'app/payment-page/pay.component.html',
    styleUrls: ['app/payment-page/pay.component.css'],

})
export class PaymentComponent implements OnInit, OnDestroy {
  price:number;
  name: string;

  private sub: any;

  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
       this.price= +params['price']; // (+) converts string 'id' to a number

       // In a real app: dispatch action to load the details here.
    });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}

