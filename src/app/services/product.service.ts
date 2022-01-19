import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { Product as ProductCard } from '../pages/products/products.component';

import { SHOES } from '../data/products-shoes';
import { products } from '../data/product-samples';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getShoes(): Observable<Product[]> {
    const shoes = of(SHOES);
    return shoes;
  }

  getProducts(): Observable<ProductCard[]> {
    return of(products);
  }
}
