import { Injectable } from '@angular/core';
import { Cart } from '@restorecommerce/cart/lib/model/impl/Cart';
import { MockSerializer } from '@restorecommerce/cart/lib/model/impl/MockSerializer';
import { Courier } from '@restorecommerce/cart/lib/model/impl/Courier';
import {
  data,
  Decimal,
  Money,
} from '@restorecommerce/cart/lib/model/primitives';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';
import { element } from 'protractor';

import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  public cart: Cart;

  cartItemCountUpdated = new Subject<number>();

  constructor() {
    this.initializeCart();
    this.cart.setDestinationCountry('DE');
  }

  private initializeCart(): void {
    this.cart = new Cart({
      serializer: new MockSerializer(),
      shippingMethod: new Courier({
        source: JSON.stringify(data.publicDHL),
        shipping: { originCountry: 'DE' },
      }),
      taxOriginCountry: 'DE',
      taxRates: {
        vat_standard: {
          rate: new Decimal(1.19),
          desc: '+ VAT 19%',
        },
        vat_reduced: {
          rate: new Decimal(1.07),
          desc: '+ VAT 7%',
        },
      },
    });
  }

  isItemInCart(skuId: string) {
    return this.cart.getItems().find((item) => item.sku === skuId);
  }

  addItemToCart(items: IItem[]): void {
    this.cart.addItems(items);
    this.cartItemCountUpdated.next(this.getCartItemCount());
  }

  getCartItems(): IItem[] {
    return this.cart.getItems();
  }

  getCartItemCount(): number {
    return this.cart.getItemCount();
  }

  getCartItemTotal(): number {
    let sum: number = 0;
    var x = this.cart.getItems();
    x.forEach((item) => (sum += Number(item.price)));
    return sum;
  }

  getCartTotalNet(): Decimal {
    return this.cart.getTotalNet();
  }

  getCartTotalGross(): Decimal {
    return this.cart.getTotalGross();
  }

  getCartShipping(): Money {
    return this.cart.getShipping().price;
  }

  removeCartItem(sku: string): void {
    this.cart.remItem(sku);
  }

  round(value: Money): string {
    return this.cart.round(value);
  }

  // non related functions
  public desktopSize(): number {
    return 1400;
  }

  public tabletSize(): number {
    return 768;
  }

  public getScreenSize(): number {
    return document.body.clientWidth;
  }

  public getScreenWidth(): number {
    return window.screen.width;
  }
}
