import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import Category from "../models/Category";

@Injectable({
  providedIn:'root'
})

export default class CategoryService {
  private baseUrl = 'https://dummyjson.com/products/categories';

  constructor(private http : HttpClient) {}

  getAll ():Observable<Category[]>{
    return this.http.get<Category[]>(this.baseUrl);
  }
}
