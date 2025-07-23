import { Component, Input } from '@angular/core';

import { CommonModule, NgFor } from '@angular/common';
import { CategoryCardComponent } from '../../component/category-card/category-card.component';
import CategoryService from '../../service/Category.service';
import Category from '../../models/Category';
import ProductService from '../../service/Product.service';

@Component({
  selector: 'app-category-list',
  imports: [CategoryCardComponent,NgFor , CommonModule],
  templateUrl: './category-list.component.html',
  styleUrl: './category-list.component.css'
})
export class CategoryListComponent {


constructor(private cateService: CategoryService, private productService : ProductService) {}


  @Input() layout: 'grid' | 'scroll' = 'grid';

  public categories: Category[] = [];

  ngOnInit(): void {
    this.getCategories();
  }

  getCategories() {
    return this.cateService.getAll().subscribe({
      next: (data) => {
      this.categories=data;
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  selectedCategory(categoryName:string){
    this.productService.getProductsByCategory(categoryName).subscribe({
      next: (data) => {
      console.log(data);

      },
      error: (error) => {
        console.log(error);
      },
    });
  }

}
