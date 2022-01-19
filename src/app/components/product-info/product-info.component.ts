import { Component, OnInit } from '@angular/core';
import { Product } from 'src/app/models/product';
//import { Decimal } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  product: Product;

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {
    this.getProduct();
  }

  public getStyle(color: string, selected: boolean): string {
    if (selected) {
      return '';
    }
  }

  public addItemToCart() {
    /*
    this.cartService.addItemToCart([
      {
        sku: '50433323',
        desc: 'Italian-made leather sneakers with monogram details',
        imgSrc:
          'https://images.hugoboss.com/is/image/boss/hbeu50410989_001_250?$re_fullPageZoom$&qlt=85&wid=300&hei=200',
        price: new Decimal('250.00'), // Price
        taxType: 'vat_standard',
        weight: 610, // grams
        height: 4.2, // cm
        width: 27.5, // cm
        depth: 6.22, // cm
        quantity: 1,
      },
    ]);
    */
    this.notificationService.success();
  }

  onChangeProductColor(color: string) {}

  getProduct(): void {
    this.productService.getShoe().subscribe((shoe) => (this.product = shoe));
  }
}
