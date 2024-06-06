import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../models/models';

const API_URL: string = 'http://localhost:8080/products';
const HEADER = { withCredentials: true };

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getAllProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(API_URL);
  }

  getProductById(id: number): Observable<Product> {
    return this.http.get<Product>(`${API_URL}/${id}`);
  }

  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(API_URL, product);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.put<Product>(`${API_URL}/${id}`, product, HEADER);
  }

  deleteProduct(id: number): Observable<void> {
    return this.http.delete<void>(`${API_URL}/${id}`, HEADER);
  }
}
