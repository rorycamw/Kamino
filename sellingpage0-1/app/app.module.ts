import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { MediaItemComponent } from './media-item.component';
import { SidebarComponent } from './sidebar.component';

@NgModule({
  imports: [
    BrowserModule
  ],
  declarations: [
    AppComponent,
    MediaItemComponent,
    SidebarComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}