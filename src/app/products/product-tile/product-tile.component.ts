import { Component, Input, TemplateRef, ViewRef } from '@angular/core';
import { NgbActiveModal, NgbModal, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';
import { Product } from '../_models/product.model';

@Component({
  selector: 'tsh-product-tile-modal',
  styles: [`
    .position-absolute {
      top: 10px;
      right: 10px;
      width: 25px;
      height: 25px;
      color: #000;
    }
  `],
  template: `
  <div class="modal-body p-0 m-0 rounded position-relative">
    <img class="w-100" [src]="product.image">
    <div class="d-flex flex-column flex-grow-1 p-3">
      <h4>{{ product.name }}</h4>
      <p class="text-gray">{{ product.description }}</p>
    </div>

    <div 
      class="position-absolute pointer bg-white rounded-circle d-flex justify-content-center align-items-center"
      (click)="activeModal.close()">
      <span>x</span>
    </div>
  </div>
  `,
})
export class ProductTileModalComponent {
    @Input() product!: Product;

    constructor(public activeModal: NgbActiveModal) {}
}

@Component({
  selector: 'tsh-product-tile',
  host: {class: 'd-flex flex-column bg-white position-relative'},
  templateUrl: './product-tile.component.html',
  styleUrls: ['./product-tile.component.scss']
})
export class ProductTileComponent {
    @Input() product!: Product;

    constructor(private modalService: NgbModal) {}


    openDetails(): void {
     const modal = this.modalService.open(ProductTileModalComponent, {
        backdrop: false,
        centered: true,
      });

     modal.componentInstance.product = this.product;
    }
}
