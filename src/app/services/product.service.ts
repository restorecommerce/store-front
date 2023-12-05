import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Product as ProductCard } from '../components/products/products.component';
import { Subject, Subscription } from 'rxjs';
import { ProductsQueryGQL } from '../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProductService implements OnDestroy {
  productImageColorHover = new Subject<string>();

  sub: Subscription;

  productColorChanged = new EventEmitter<string>();

  constructor(private http: HttpClient, private productGQL: ProductsQueryGQL) {}

  getShoe(shoeId: number | string) {
    const url = `/assets/shoes/${shoeId}.json`;
    return this.http.get<Product>(url);
  }

  getShoes() {
    this.sub = this.productGQL
      .fetch({ input: { limit: 10 } })
      .subscribe((response) => console.log('Products', response));
    return this.http.get<ProductCard[]>('/assets/shoes/shoes.json');
  }

  ngOnDestroy(): void {
    if (this.sub) {
      this.sub.unsubscribe();
    }
  }

  onProductColorChanged(color: string) {}
}
