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

export interface CartItem extends IItem {
  variant: IoRestorecommerceProductPhysicalVariant;
  productId: string;
}

import { Subject } from 'rxjs';
import { IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';

@Injectable({
  providedIn: 'root',
})
export class CartService {
  cart: Cart;
  /// Let the product instants be available in the Product instance page.
  // Or even better I could extend the type of a `IItem and make it a StoreIItem

  cartItemCountUpdated = new Subject<number>();
  itemRemovedFromCart$ = new Subject<string>();

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

  addItemToCart(items: CartItem[]): void {
    this.cart.addItems(items);
    this.cartItemCountUpdated.next(this.getCartItemCount());
  }

  getCartItems(): CartItem[] {
    return this.cart.getItems() as CartItem[];
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
    this.cartItemCountUpdated.next(this.getCartItemCount());
    this.itemRemovedFromCart$.next(sku);
  }

  round(value: Money): string {
    return this.cart.round(value);
  }
}
