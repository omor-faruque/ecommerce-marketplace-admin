import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http:HttpClient) { }

  // Product Services

  getAllProducts():Observable<Product[]> {
    return this.http.get<Product[]>("http://localhost:8080/api/products-with-category");
  }

  addNewProduct(product:Product): Observable<Product> {
    return this.http.post<Product>("http://localhost:8080/api/products",product);
  }

  updateProduct(product:Product): Observable<Product> {
    return this.http.put<Product>("http://localhost:8080/api/products",product);
  }

  deleteProduct(id:number) {
    return this.http.delete("http://localhost:8080/api/products/"+id);
  }

  // Category Services
  
  getAllCategories():Observable<Category[]> {
    return this.http.get<Category[]>("http://localhost:8080/api/categories");
  }

  addNewCategory(categoey:string): Observable<any> {
    let categoryObj:Category = {
      name: categoey
    }
    return this.http.post("http://localhost:8080/api/categories",categoryObj);
  }

  deleteCategory(id:number) {
    return this.http.delete("http://localhost:8080/api/categories/"+id);
  }


}
