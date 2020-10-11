import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';
import { GetProductsRequest, ProductsService } from '../_services/products.service';

@Component({
  selector: 'tsh-header',
  templateUrl: './products-header.component.html',
  styleUrls: ['./products-header.component.scss']
})
export class ProductsHeaderComponent implements OnInit, OnDestroy {
  public productsRequestParams: GetProductsRequest = {} as GetProductsRequest;

  private subscription!: Subscription;

  constructor(private readonly router: Router,
              private readonly productsService: ProductsService) {}

  public ngOnInit(): void {
    this.subscription = this.productsService.getProductRequestParams$()
      .subscribe(params => {
        this.productsRequestParams = params;
      });
  }

  public ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  public goToLogin(): void {
    this.router.navigate(['auth']);
  }

  public filterProducts(): void {
    this.productsRequestParams.page = 1;
    this.productsService.updateProductsRequestParams(this.productsRequestParams);
  }

  public updateParams(key: keyof GetProductsRequest, value: string | boolean | null): void {
    if (typeof(value) === 'string') {
      value = value.trim();
    }

    // @ts-ignore
    // TODO: why ts throws error
    this.productsRequestParams[key] = value;
  }
}
