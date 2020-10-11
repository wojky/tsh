import { Component, OnInit } from '@angular/core';
import { Product } from './_models/product.model';
import { GetProductsRequest, ProductsService } from './_services/products.service';

@Component({
  selector: 'tsh-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  public inProgress = true;
  public isSuccess = false;

  public products: Array<Product> = [];
  public productsRequestParams!: GetProductsRequest;

  public pageCount = 0;
  public paginationPages: Array<number> = [];

  constructor(private readonly productsService: ProductsService) {}

  public ngOnInit(): void {
    this.productsService.getProductRequestParams$()
      .subscribe(params => {
        this.productsRequestParams = params;
        this.getProducts(params);
      });
  }

  private getProducts(params: GetProductsRequest): void {
    this.inProgress = true;
    this.productsService.getProducts$(params).subscribe((res) => {
      this.isSuccess = true;
      this.pageCount = res.pageCount;
      this.products = res.items;
    });
  }

  public goToPage(page: number): void {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    this.productsService.updateProductsRequestParams({page});
  }
}
