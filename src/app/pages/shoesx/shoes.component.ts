import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs';
import { IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';
import { ProductService } from 'src/app/services/product.service';
import { Product, timeout } from '../../components/products/products.component';

@Component({
  selector: 'app-shoes',
  templateUrl: './shoes.component.html',
  styleUrls: ['./shoes.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ShoesComponent {
  products$ = this.productService.products$.pipe(
    map((product) =>
      product.reduce(
        (agreggate, prod) => [...agreggate, ...prod.product.physical.variants],
        [] as IoRestorecommerceProductPhysicalVariant[]
      )
    )
  );
  pageTitle = "Men's shoes";
  currency = '€';

  constructor(private productService: ProductService, private router: Router) {}
}
