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
  isItemInCart: boolean;

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

  ngOnInit(): void {
    this.isItemInCart = Boolean(
      this.cartService.isItemInCart(String(this.product.id))
    );
  }

  public getStyle(color: string, selected: boolean): string {
    if (selected) {
      return '';
    }
  }

  removeItemFromCart(skuId: string) {
    this.cartService.removeCartItem(skuId);
    this.isItemInCart = false;
    this.notificationService.error('Item removed from cart');
  }

  addItemToCart() {
    if (!this.selectedSize) {
      this.notificationService.error('Please select a size for the product!');
      return;
    }

    const {
      price,
      id: sku,
      title,
      productImageSources,
      selectedColor,
    } = this.product;
    const thumbImage = productImageSources[selectedColor][0].srcThumb;

    this.cartService.addItemToCart([
      {
        sku,
        desc: title,
        imgSrc: thumbImage,
        price: new Decimal(price),
        taxType: 'vat_standard',
        weight: 610,
        height: 4.2,
        width: 27.5,
        depth: 6.22,
        quantity: 1,
      },
    ]);

    this.isItemInCart = true;
    this.notificationService.success('Item added to cart!');
  }

  onChangeProductColor(color: string): void {
    this.product.selectedColor = color;
    this.productService.productColorChanged.emit(color);
  }

  onSizeSelected(payload: number) {
    this.selectedSize = payload;
  }
}
