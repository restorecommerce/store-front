import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from 'src/app/features/products/services/product.service';
import { combineLatest, map, switchMap } from 'rxjs';
import { ScreenService } from 'src/app/core/services/screen.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private productId$ = this.route.params.pipe(
    map((params) => params.productId as string)
  );

  private variantId$ = this.route.params.pipe(
    map((params) => params.variantId as string)
  );

  private products$ = this.productService.products$;

  product$ = this.productId$.pipe(
    switchMap((productId) => {
      return this.products$.pipe(
        map((products) => products.find((product) => product.id === productId))
      );
    })
  );

  private variants$ = this.product$.pipe(
    map((product) => product.product.physical.variants)
  );

  varaint$ = combineLatest([this.variantId$, this.variants$]).pipe(
    map(([variantId, variants]) => {
      return variants.find((variant) => variant.id === variantId);
    })
  );

  constructor(
    private productService: ProductService,
    private route: ActivatedRoute,
    private displayService: ScreenService
  ) {}

  ngOnInit(): void {
    this.route.params.subscribe(console.log);

    //this.route.snapshot.params['productId'];
  }

  public screenWidth() {
    return this.displayService.getScreenSize();
  }

  public desktopWidth() {
    return this.displayService.desktopSize();
  }

  public tabletWidth() {
    return this.displayService.tabletSize();
  }
}
