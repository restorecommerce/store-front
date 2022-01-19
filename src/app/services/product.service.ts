import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';
import { Product as ProductCard } from '../pages/products/products.component';

import { SHOE } from '../data/products-shoes';
import { products } from '../data/product-samples';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getShoe(): Observable<Product> {
    /* This is a placeholder to access the a `shoe` product detail  */
    return of(SHOE);
  }

  getShoes(): Observable<ProductCard[]> {
    /* This is a placeholder to access the a `shoe` product detail  */
    return of(products);
  }
}
