import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Decimal } from '@restorecommerce/cart/lib/model/primitives';
import {
  CartItem,
  CartService,
} from 'src/app/features/cart/services/cart.service';
import { NotificationService } from 'src/app/core/services/notification.service';
import { IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss'],
})
export class ProductInfoComponent implements OnInit, OnChanges {
  @Input() product: IoRestorecommerceProductPhysicalVariant;
  isItemInCart: boolean;

  constructor(
    public cartService: CartService,
    private notificationService: NotificationService
  ) {}

  ngOnInit(): void {
    this.cartService.itemRemovedFromCart$.subscribe((sku) => {
      this.isItemInCart = !(sku === this.product.id);
    });
  }

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
    const selectedIndex = 0; // The selected Index could be chosen by the user.

    const { price, id: sku, name, images, properties } = this.product;

    const thumbImage = images[selectedIndex].url;
    const width = properties.find((prop) => prop.id === 'Width');
    const height = properties.find((prop) => prop.id === 'Height');
    const weight = properties.find((prop) => prop.id === 'Weight');
    const depth = properties.find((prop) => prop.id === 'Depth');

    const cartItem = {
      sku,
      desc: name,
      imgSrc: thumbImage,
      price: new Decimal(price.salePrice),
      taxType: 'vat_standard',
      weight: weight ? weight.value : 0,
      height: height ? height.value : 0,
      width: width ? width.value : 0,
      depth: depth ? depth.value : 0,
      quantity: 1, // replace hardcoded entity value!
      variant: this.product,
    } as CartItem;

    this.cartService.addItemToCart([cartItem]);

    this.notificationService.success('Item added to cart');
  }

  onChangeProductColor(color: string): void {
    // this.product.selectedColor = color;
    // this.productService.productColorChanged.emit(color);
  }

  onSizeSelected(size: number) {
    // this.product.selectedSize = size;
  }

  onChangeQuantityPicker(quantity: number) {
    //TODO: Set a new quantity for the product you want to buy!
    // quantity have a value of 1 - n; where n is the total number of quantity
    // that can be purchased for a given product.
  }
}
