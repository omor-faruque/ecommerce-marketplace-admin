import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/product';
import { Category } from '../models/category';
import { Order } from '../models/order';

const API_URL = "http://localhost:8080/api";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  reqHeader: HttpHeaders | undefined;

  constructor(private http: HttpClient) {
    this.reqHeader = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
  }

  // Product Services

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL + "/public/products");
  }

  addNewProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL + "/products", product, { headers: this.reqHeader });
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(API_URL + "/products", product, { headers: this.reqHeader });
  }

  deleteProduct(id: number) {
    return this.http.delete(API_URL + "/products/" + id, { headers: this.reqHeader });
  }

  // Category Services

  getAllCategories(): Observable<Category[]> {
    return this.http.get<Category[]>(API_URL + "/public/categories");
  }

  addNewCategory(categoey: string): Observable<any> {
    let categoryObj: Category = {
      name: categoey
    }
    return this.http.post(API_URL + "/categories", categoryObj, { headers: this.reqHeader });
  }

  deleteCategory(id: number) {
    let reqHeader: HttpHeaders = new HttpHeaders({
      Authorization: `Bearer ${localStorage.getItem("token")}`,
    });
    return this.http.delete(API_URL + "/categories/" + id, { headers: reqHeader });
  }

  // Order Services

  getAllOrders(): Observable<Order> {
    return this.http.get<Order>(API_URL + "/orders");
  }

}
