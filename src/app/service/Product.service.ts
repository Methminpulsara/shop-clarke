import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Product from "../models/Product";

@Injectable({providedIn:'root'})
export default class ProductService {

  constructor(private http:HttpClient){}

  private baseUrl ="https://dummyjson.com/products"


  getAllProducts(): Observable<{ products: Product[] }> {
    return this.http.get<{ products: Product[] }>(`${this.baseUrl}`);
  }

  getProductsByCategory(slug:string):Observable<{products: Product[]}>{
    return this.http.get<{products: Product[]}>(`${this.baseUrl}/category/${slug}`);
  }

  getProductById(id:number):Observable<Product>{
    return this.http.get<Product>(`${this.baseUrl}/${id}`);
  }

}
