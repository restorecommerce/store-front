import { Injectable } from '@angular/core';

import { map, catchError, of, tap } from 'rxjs';
import {
  IoRestorecommerceProductProduct,
  IoRestorecommerceResourcebaseFilterOperation,
  ProductsQueryGQL,
} from '../../../generated/graphql';

export const PRODUCT_LIST_LIMIT = 20;
export const PRODUCT_LIST_OFFSET = 4;

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private productGQL: ProductsQueryGQL) {}

  products$ = this.productGQL
    .fetch({
      input: {
        offset: PRODUCT_LIST_OFFSET * PRODUCT_LIST_LIMIT, // TODO Implementing pagination.
        limit: PRODUCT_LIST_LIMIT,
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
