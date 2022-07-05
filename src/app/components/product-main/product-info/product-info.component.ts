import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Product } from 'src/app/models/product';
import { Decimal } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';
import { ProductService } from 'src/app/services/product.service';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit, OnChanges {
  @Input() product: Product;
  isItemInCart: boolean;

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService,
    private productService: ProductService
  ) {}

  ngOnInit(): void {}

  ngOnChanges(changes: SimpleChanges): void {
    if (this.product) {
      this.isItemInCart = Boolean(
        this.cartService.isItemInCart(String(this.product.id))
      );
    }
  }

  public getStyle(color: string, selected: boolean): string {
    if (selected) {
      return '';
    }
  }

  removeProductFromCart(skuId: string) {
    this.cartService.removeCartItem(skuId);
    this.isItemInCart = false;
    this.notificationService.error('Item removed from cart');
  }

  addProductToCart() {
    if (!this.product.selectedSize) {
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
        quantity: 1, // replace hardcoded entity value!
        product: this.product,
      } as IItem,
    ]);
    this.isItemInCart = true;
    this.notificationService.success('Item added to cart!');
  }

  onChangeProductColor(color: string): void {
    this.product.selectedColor = color;
    this.productService.productColorChanged.emit(color);
  }

  onSizeSelected(size: number) {
    this.product.selectedSize = size;
  }

  onChangeQuantityPicker(quantity: number) {
    //TODO: Set a new quantity for the product you want to buy!
    // quantity have a value of 1 - n; where n is the total number of quantity
    // that can be purchased for a given product.
  }
}
