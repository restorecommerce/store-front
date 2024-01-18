import { Injectable } from '@angular/core';
import { catchError, map, of, tap } from 'rxjs';
import {
  IoRestorecommerceProductCategoryProductCategory,
  IoRestorecommerceResourcebaseFilterOperation,
  IoRestorecommerceResourcebaseFilterOpOperator,
  ProductCategoryQueryGQL,
} from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class ProductCategoryService {
  constructor(private categoryGQL: ProductCategoryQueryGQL) {}

  category$ = this.categoryGQL
    .fetch({
      input: {
        filters: [
          {
            // TODO Refactor this code as In-house boilerplate code.
            filters: [
              {
                field: 'meta.owners[*].attributes[0].value',
                operation: IoRestorecommerceResourcebaseFilterOperation.In,
                value: 'r-ug',
              },
              // Parent items are items with parent as null: The filter for this doesn't work.
              // {
              //   field: 'parent.parent_id',
              //   value: '',
              //   operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
              // },
            ],
            operator: IoRestorecommerceResourcebaseFilterOpOperator.And,
          },
        ],
      },
    })
    .pipe(
      map((response) =>
        response.data.catalog.product_category.Read.details.items.map(
          (item) =>
            item.payload as IoRestorecommerceProductCategoryProductCategory
        )
      ),
      tap((data) => console.log('category data', data)),
      catchError((err) => {
        console.log('Error:', err);
        return of(null);
      })
    );
}
