import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from '../../models/Product';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone:true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {


  @Input() product!: Product // all products parentgen gnnw

  @Output() selectedProduct = new EventEmitter<number>(); // select krpu product eke id eka parennt ywann


  onProductClick(){
    this.selectedProduct.emit(this.product.id);
  }



}
