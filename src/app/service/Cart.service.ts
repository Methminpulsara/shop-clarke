import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import Cart from "../models/Cart";
import { Observable } from "rxjs";

@Injectable({providedIn:'root'})
export default class CartService {

  private baseUrl = 'https://dummyjson.com/carts/add'
  constructor(private http :  HttpClient) {}

  addToCart(cartDetails:Cart) :Observable<any> {
    return this.http.post<any>(this.baseUrl,cartDetails)
  }

}
