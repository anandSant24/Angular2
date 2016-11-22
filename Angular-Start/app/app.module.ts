import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent }  from './app.component';
import { ProductListComponent } from './products/product-list.component';
import { TestComponent } from './products/test-list.component';
import { ProductFilterPipe } from './products/product-filter.pipes';

@NgModule({
  imports: [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, ProductListComponent, TestComponent, ProductFilterPipe ],
  bootstrap: [ AppComponent ]
})
export class AppModule { }