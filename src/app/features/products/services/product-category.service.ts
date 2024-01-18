import { Injectable } from '@angular/core';
import { catchError, of, tap } from 'rxjs';
import {
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
              {
                field: 'parent.parent_id',
                value: '',
                operation: IoRestorecommerceResourcebaseFilterOperation.Eq,
              },
            ],
            operator: IoRestorecommerceResourcebaseFilterOpOperator.And,
          },
        ],
      },
    })
    .pipe(
      tap((data) => console.log('category data', data)),
      catchError((err) => {
        console.log('Error:', err);
        return of(null);
      })
    );
}
