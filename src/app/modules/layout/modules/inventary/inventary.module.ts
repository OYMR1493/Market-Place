import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InventaryRoutingModule } from './inventary-routing.module';
import { ProductsComponent } from './components/products/products.component';


@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    InventaryRoutingModule
  ]
})
export class InventaryModule { }
