import { Component, OnInit, Input } from '@angular/core';
import { Product } from 'src/app/models/product';
import { Decimal } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit {
  @Input() product: Product;

  selectedSize: number;
  /* 
    Question: how do we deal with the selected product size,
    in the cart, since IItem has no such type.
  */
  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  public getStyle(color: string, selected: boolean): string {
    if (selected) {
      return '';
    }
  }

  public addItemToCart() {
    if (!this.selectedSize) {
      this.notificationService.error('Please select a size for the product!');
      return;
    }

    const isItemInCart = this.cartService.isItemInCart(String(this.product.id));
    if (isItemInCart) {
      this.notificationService.error('Item already added to cart');
      return;
    }

    const { price, id: sku, title } = this.product;
    this.cartService.addItemToCart([
      {
        sku,
        desc: title,
        imgSrc: null, // first image from the selected color thumb!
        price: new Decimal(price),
        taxType: 'vat_standard',
        weight: 610,
        height: 4.2,
        width: 27.5,
        depth: 6.22,
        quantity: 1,
      },
    ]);

    this.notificationService.success('Item added to cart!');
    // then set itemAddedToCart to show the RemoveFromCart button!
  }

  onChangeProductColor(color: string): void {
    this.product.selectedColor = color;
    this.productService.productColorChanged.emit(color);
  }

  onSizeSelected(payload: number) {
    this.selectedSize = payload;
  }
}
