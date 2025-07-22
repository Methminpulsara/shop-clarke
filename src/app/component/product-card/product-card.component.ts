import { Component } from '@angular/core';
import Product from '../../models/Product';

@Component({
  selector: 'app-product-card',
  imports: [],
  templateUrl: './product-card.component.html',
  styleUrl: './product-card.component.css'
})
export class ProductCardComponent {

  public productList : Product []=[]

}
