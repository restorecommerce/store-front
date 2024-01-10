import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ProductService } from 'src/app/features/products/services/product.service';

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
  styleUrls: ['./product-variants.component.scss'],
})
export class ProductVariantsComponent {
  currency = '€';
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

  productId$ = this.route.params.pipe(
    map((params) => params.productId as string)
  );

  products$ = this.productService.products$;

  product$ = this.productId$.pipe(
    switchMap((productId) => {
      return this.products$.pipe(
        map((products) => products.find((product) => product.id === productId))
      );
    })
  );

  pageTitle$ = this.product$.pipe(map((product) => product.product.name));

  productVariants$ = this.product$.pipe(
    map((product) => product.product.physical.variants)
  );

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  onProductClicked(productId: string, varaintId: string) {
    // TODO Refactor code for route.
    this.router.navigateByUrl(`shoes/${productId}/variants/${varaintId}`);
  }
}
