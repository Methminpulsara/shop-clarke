import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Product from "../models/Product";

@Injectable({providedIn:'root'})
export default class ProductService {

  constructor(private http:HttpClient){}

  private baseUrl ="https://dummyjson.com/products"


  getAllProducts():Observable<Product[]>{
    return this.http.get<Product[]>(this.baseUrl);
  }

}
