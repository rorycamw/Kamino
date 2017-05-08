import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent }  from './app.component';
import {ProductComponent} from './products/products.component';
import {productFilterPipe} from "./products/products.pipe";
import {starComponent} from "./shared/star.component";

@NgModule({
  imports: [ BrowserModule , FormsModule],
  declarations: [ AppComponent, ProductComponent , productFilterPipe , starComponent],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
