import { Injectable, EventEmitter, OnDestroy } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Product } from '../models/product';
import { Product as ProductCard } from '../products/components/products/products.component';
import { Subject, Subscription, map, catchError, of, tap } from 'rxjs';
import {
  IoRestorecommerceProductProduct,
  IoRestorecommerceResourcebaseFilterOperation,
  ProductsQueryGQL,
} from '../generated/graphql';
import { Observable } from '@apollo/client/utilities';

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

  products$ = this.productGQL
    .fetch({
      input: {
        offset: 0,
        limit: 10,
        filters: [
          {
            // TODO Refactor this code as In-house boilerplate code.
            filters: [
              {
                field: 'meta.owners[*].attributes[0].value',
                operation: IoRestorecommerceResourcebaseFilterOperation.In,
                value: 'r-ug',
              },
            ],
          },
        ],
      },
    })
    .pipe(
      map((response) =>
        response.data.catalog.product.Read.details.items.map(
          (item) => item.payload as IoRestorecommerceProductProduct
        )
      ),
      tap((data) => console.log('data', data)),
      catchError((err) => {
        console.log('Error:', err);
        return of([] as IoRestorecommerceProductProduct[]);
      })
    );

  getShoes() {
    this.sub = this.productGQL
      .fetch({
        input: {
          offset: 0,
          limit: 10,
          filters: [
            {
              // TODO This refactor this code as In-house boilerplate code.
              filters: [
                {
                  field: 'meta.owners[*].attributes[0].value',
                  operation: IoRestorecommerceResourcebaseFilterOperation.In,
                  value: 'r-ug',
                },
              ],
            },
          ],
        },
      })
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
