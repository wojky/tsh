import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from './products.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { SharedModule } from '../shared/shared.module';
import { ProductsHeaderComponent } from './products-header/products-header.component';
import { ProductTileComponent, ProductTileModalComponent } from './product-tile/product-tile.component';



@NgModule({
  declarations: [ProductsComponent, ProductsHeaderComponent, ProductTileComponent, ProductTileModalComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ProductsComponent
      }
    ]),
    FormsModule,
    SharedModule,
  ]
})
export class ProductsModule { }
