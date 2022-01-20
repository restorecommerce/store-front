import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Product as ProductCard } from '../pages/products/products.component';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  getShoe(shoeId: number | string) {
    const url = `/assets/shoes/${shoeId}.json`;
    return this.http.get<Product>(url);
  }

  getShoes() {
    //return of(products);
    return this.http.get<ProductCard[]>('/assets/shoes/shoes.json');
  }
}
