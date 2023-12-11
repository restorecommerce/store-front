import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
})
export class ProductVariantsComponent {
  currency = '€';

  products$ = this.productService.products$;

  // TODO Handle error
  productVaraints$ = this.route.params.pipe(
    map((params) => params.productId),
    switchMap((productId) => {
      return this.products$.pipe(
        map(
          (products) =>
            products.find((product) => product.id === productId).product
              .physical.variants
        )
      );
    })
  );

  responsiveImagesConfiguration = [
    { width: 400, min: 0, max: 1100.99, suffix: '-xl', format: 'webp' },
    { width: 400, min: 0, max: 1100.99, suffix: '-xl', format: 'jpg' },
    { width: 190, min: 1101, max: 1156.99, suffix: '-sm', format: 'webp' },
    { width: 190, min: 1101, max: 1156.99, suffix: '-sm', format: 'jpg' },
    { width: 260, min: 1157, max: 1268.99, suffix: '-md', format: 'webp' },
    { width: 260, min: 1157, max: 1268.99, suffix: '-md', format: 'jpg' },
    { width: 330, min: 1269, max: 1381.99, suffix: '-lg', format: 'webp' },
    { width: 330, min: 1269, max: 1381.99, suffix: '-lg', format: 'jpg' },
    { width: 400, min: 1382, max: 99999, suffix: '-xl', format: 'webp' },
    { width: 400, min: 1382, max: 99999, suffix: '-xl', format: 'jpg' },
  ];

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute
  ) {}

  onProductClicked(varaintId: string) {}
}
