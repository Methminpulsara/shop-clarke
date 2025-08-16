import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Cart from "../models/Cart";

@Injectable({providedIn:'root'})
export default class CartService {

  private baseUrl = 'https://dummyjson.com/carts/add'
  constructor(private http :  HttpClient) {}

  addToCart(cartDetails:Cart){
     this.http.post(this.baseUrl,cartDetails)
  }

}
