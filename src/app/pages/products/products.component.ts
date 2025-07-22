import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../component/product-card/product-card.component';
import ProductService from '../../service/Product.service';
import { NgFor } from '@angular/common';
import Product from '../../models/Product';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, ProductCardComponent,NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {

    constructor(private productService :  ProductService){}


    public productList : Product[]=[]


    ngOnInit(): void {
      this.getAllProducts();
    }

 getAllProducts() {
  this.productService.getAllProducts().subscribe({
    next: (data) => {
      this.productList = data.products;
    },
    error: err => console.error(err)
  });
}

}
