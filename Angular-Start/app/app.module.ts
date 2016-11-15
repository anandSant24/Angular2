import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { TestComponent } from './products/test-list.component'

@NgModule({
  imports: [ BrowserModule ],
  declarations: [ AppComponent, ProductListComponent, TestComponent ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
