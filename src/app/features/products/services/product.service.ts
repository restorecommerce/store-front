import { Injectable, EventEmitter } from '@angular/core';

import { map, catchError, of, tap } from 'rxjs';
import {
  IoRestorecommerceProductProduct,
  IoRestorecommerceResourcebaseFilterOperation,
  ProductsQueryGQL,
} from '../../../generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  productColorChanged = new EventEmitter<string>();

  constructor(private productGQL: ProductsQueryGQL) {}

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
}
