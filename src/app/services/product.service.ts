import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Product } from '../models/product';

import { SHOES } from '../data/products-shoes';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor() {}

  getShoes(): Observable<Product[]> {
    const shoes = of(SHOES);
    return shoes;
  }
}
