import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss'],
})
export class ProductComponent implements OnInit {
  private dataService: CartService;
  product: Product;

  constructor(
    private service: CartService,
    private productService: ProductService,
    private route: ActivatedRoute
  ) {
    this.dataService = this.service;
  }

  ngOnInit(): void {
    this.getProduct();
  }

  getProduct(): void {
    const productId = this.route.snapshot.params['productId'];
    this.productService.getShoe(productId).subscribe((shoe) => {
      this.product = shoe;
    });
  }

  public screenWidth() {
    return this.dataService.getScreenSize();
  }

  public desktopWidth() {
    return this.dataService.desktopSize();
  }

  public tabletWidth() {
    return this.dataService.tabletSize();
  }
}
