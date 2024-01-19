import { Component, HostBinding } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/features/products/services/product.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})
export class ProductListComponent {
  @HostBinding('class') classes = 'w-100p row flex-wrap';

  products$ = this.productService.products$;

  // TODO Pass pageTitle to the top view
  pageTitle = "Men's shoes";

  constructor(private productService: ProductService, private router: Router) {}

  onProductClicked(productId: string) {
    this.router.navigateByUrl(`products/${productId}`);
  }
}
