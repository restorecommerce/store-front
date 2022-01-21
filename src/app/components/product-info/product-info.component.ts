import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Decimal } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
// import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {}

  public getStyle(color: string, selected: boolean): string {
    if (selected) {
      return '';
    }
  }

  public addItemToCart() {
    const { price, id: sku, title } = this.product;
    this.cartService.addItemToCart([
      {
        sku,
        desc: title,
        imgSrc: null,
        price: new Decimal(price), // Price
        taxType: 'vat_standard',
        weight: 610, // grams
        height: 4.2, // cm
        width: 27.5, // cm
        depth: 6.22, // cm
        quantity: 1,
      },
    ]);

    this.notificationService.success();
  }

  onChangeProductColor(color: string): void {
    this.product.selectedColor = color;
  }
}
