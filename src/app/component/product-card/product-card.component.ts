import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from '../../models/Product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuantityPopupComponent } from "../quantity-popup/quantity-popup.component";

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, QuantityPopupComponent],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {



  constructor(private router: Router) { }


  @Input() product!: Product // all products parentgen gnnw

  showPopup = false;
  selectedProduct!: Product;




  openQuantityPopup(product: Product) {
    this.selectedProduct = product;
    this.showPopup = true;
  }

  closePopup() {
    this.showPopup = false;
  }

  addToCart(quantity: number) {
    this.closePopup();
  }



  onProductClick() {
    this.router.navigate(['/dashboard/products', this.product.id]);

  }




}
