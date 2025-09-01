import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from '../../models/Product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { QuantityPopupComponent } from "../quantity-popup/quantity-popup.component";
import CartService from '../../service/Cart.service';
import Cart from '../../models/Cart';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule, QuantityPopupComponent],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {



  constructor(private router: Router,private cartService : CartService) { }


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
  const cartDetails: Cart = {
    userId: 1, // your test user
    products: [
      {
        id: this.selectedProduct.id,
        quantity: quantity,
      },
    ],
  };


  this.cartService.addToCart(cartDetails).subscribe({
    next: (res) => {
      console.log('Added to cart:', res);

      this.cartService.getUserCart(cartDetails.userId).subscribe({
        next: (cartRes) => console.log('User cart:', cartRes),
        error: (err) => console.error('Error fetching cart:', err),
      });
    },
    error: (err) => console.error('Error adding to cart:', err),
  });

  this.closePopup();
}
  onProductClick() {
    this.router.navigate(['/dashboard/products', this.product.id]);
  }

}
