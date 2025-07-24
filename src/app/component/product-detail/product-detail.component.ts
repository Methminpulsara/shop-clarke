import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';
import ProductService from '../../service/Product.service';
import Product from '../../models/Product';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-product-detail',
  imports: [NgIf, RouterLink],
  templateUrl: './product-detail.component.html',
  styleUrl: './product-detail.component.css',
})
export class ProductDetailComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private productService: ProductService
  ) { }

  public product!: Product;

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = Number(params.get('id'));

      if (id) {
        this.productService.getProductById(id).subscribe({
          next: (data) => {
            this.product = data;
          },

          error: (err) => console.error('Error fetching product:', err)
        });
      }
    });
  }

}


