import { Component } from '@angular/core';
import { CategoryListComponent } from "../category-list/category-list.component";
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  imports: [CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {


  constructor(private router: Router) { }


  dispayProductsOfSelectedCategory(category: string) {
    this.router.navigate(['/dashboard/products/category', category]);
  }

}
