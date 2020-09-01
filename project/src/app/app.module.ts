import { BrowserModule, Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';
import { ShoppingBasketComponent } from './shopping-basket/shopping-basket.component';
import { ShoppingItemComponent } from './shopping-item/shopping-item.component';

@NgModule({
  declarations: [
    AppComponent,
    ShoppingBasketComponent,
    ShoppingItemComponent,

   
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
