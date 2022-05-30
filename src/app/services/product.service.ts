import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Product as ProductCard } from '../components/products/products.component';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productImageColorHover = new Subject<string>();

  productColorChanged = new EventEmitter<string>();

  constructor(private http: HttpClient) {}

  getShoe(shoeId: number | string) {
    const url = `/assets/shoes/${shoeId}.json`;
    return this.http.get<Product>(url);
  }

  getShoes() {
    return this.http.get<ProductCard[]>('/assets/shoes/shoes.json');
  }

  onProductColorChanged(color: string) {}
}
