import { Component, EventEmitter, Input, Output } from '@angular/core';
import Product from '../../models/Product';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-card',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css',
})
export class ProductCardComponent {


  constructor(private router: Router) { }


  @Input() product!: Product // all products parentgen gnnw

  onProductClick() {
    this.router.navigate(['/dashboard/products', this.product.id]);

  }


}
