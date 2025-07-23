import { Component, OnInit } from '@angular/core';
import { ProductCardComponent } from '../../component/product-card/product-card.component';
import ProductService from '../../service/Product.service';
import { NgFor } from '@angular/common';
import Product from '../../models/Product';
import { CategoryListComponent } from "../category-list/category-list.component";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-products',
  imports: [ProductCardComponent, ProductCardComponent, NgFor, CategoryListComponent],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {


    constructor(
      private productService :  ProductService,
      private route: ActivatedRoute
    ){}


    public productList : Product[]=[]


    ngOnInit(): void {
      this.route.paramMap.subscribe(params=>{
        const category = params.get('category')
        if(!category){
         this.getAllProducts()
        }else{
        this.getProductsByCategory(category)
        }
      })
    }



  getAllProducts() {
    this.productService.getAllProducts().subscribe({
      next: (data) => {
        this.productList = data.products;
      },
      error: err => console.error(err)
    });
  }

  getProductsByCategory(category:string) {
    this.productService.getProductsByCategory(category).subscribe({
      next: (data) => {
        this.productList = data.products;
      },
      error: err => console.error(err)
    });
  }


  selectedProduct(id: number) {
    console.log(id);

  }

}
