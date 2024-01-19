import { Component, HostBinding } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { map, switchMap } from 'rxjs';

import { ProductService } from 'src/app/features/products/services/product.service';

@Component({
  selector: 'app-product-variants',
  templateUrl: './product-variants.component.html',
})
export class ProductVariantsComponent {
  @HostBinding('class') classes = 'w-100p row flex-wrap';
  // TODO Flex wrap may have been deprecated in the
  // TODO Pass 'title' to the top of the products component.
  // TODO Use the route params.
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
    this.router.navigateByUrl(`products/${productId}/variants/${varaintId}`);
  }
}
