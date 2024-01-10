import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/products/services/product.service';

@Component({
  selector: 'app-shoes-products',
  templateUrl: './shoes-products.component.html',
})
export class ShoesProductsComponent {
  products$ = this.productService.products$;
  pageTitle = "Men's shoes";
  currency = '€';

  constructor(private productService: ProductService) {}
}
