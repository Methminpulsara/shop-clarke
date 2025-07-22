import { Component } from '@angular/core';
import { CategoryListComponent } from "../category-list/category-list.component";


@Component({
  selector: 'app-home',
  imports: [CategoryListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent  {

}
