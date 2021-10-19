import { Injectable } from '@angular/core';
import * as blackSneakers from 'src/app/data/blackSneakers.json';
import * as brownSneakers from 'src/app/data/brownSneakers.json';
import * as whiteSneakers from 'src/app/data/whiteSneakers.json';
import * as whiteShirt from 'src/app/data/whiteShirt.json';
import { ProductImage } from '../models/productImage';
import { Cart } from '@restorecommerce/cart/lib/model/impl/Cart';
import { MockSerializer } from '@restorecommerce/cart/lib/model/impl/MockSerializer';
import { Courier } from '@restorecommerce/cart/lib/model/impl/Courier';
import { data, Decimal, Money } from '@restorecommerce/cart/lib/model/primitives';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private color: string = "black";
  private currentImageArray: ProductImage[] = (whiteShirt as any).default;
  private loading: boolean = false;
  public cart: Cart;

  constructor() {
    this.initializeCart();
    this.cart.setDestinationCountry('DE');
  }

  private initializeCart(): void {
    this.cart = new Cart({
      serializer: new MockSerializer(),
      shippingMethod: new Courier({
        source: JSON.stringify(data.publicDHL),
        shipping: {originCountry: 'DE'}
      }),
      taxOriginCountry: 'DE',
      taxRates: {
        vat_standard: {
          rate: new Decimal(1.19),
          desc: '+ VAT 19%'
        },
        vat_reduced: {
          rate: new Decimal(1.07),
          desc: '+ VAT 7%'
        },
      }
    });
  }

  public addItemToCart(items: IItem[]): void {
    this.cart.addItems(items);
  }

  public getCartItems(): IItem[] {
    return this.cart.getItems();
  }

  public getCartItemCount(): number {
    return this.cart.getItemCount();
  }

  public getCartItemTotal(): number {
    let sum: number = 0;
    var x = this.cart.getItems();
    x.forEach(item => sum += Number(item.price));
    return sum;
  }

  public getCartTotalNet(): Decimal {
    return this.cart.getTotalNet();
  }

  public getCartTotalGross(): Decimal {
    return this.cart.getTotalGross();
  }

  public getCartShipping(): Money {
    return this.cart.getShipping().price;
  }

  public removeCartItem(sku: string): void {
    this.cart.remItem(sku)
  }

  public round(value: Money): string {
    return this.cart.round(value);
  }

  public desktopSize(): number {
    return 1400;
  }

  public tabletSize(): number {
    return 768;
  }

  public getLoading() {
    return this.loading;
  }

  public getColor(): string {
    return this.color;
  }


  public getColorName(): string {
    switch(this.color) {
      case 'black':
        return 'Schwarz';
      case 'brown':
        return 'Braun';
      case 'white':
        return 'Weiß';
    }
  }

  public getCurrentImageArray(): ProductImage[] {
    return this.currentImageArray;
  }

  public getScreenSize(): number {
    return document.body.clientWidth;
  }

  public getScreenWidth(): number {
    return window.screen.width;;
  }

  public selectColor(color: string): void {
    switch (color) {
      case 'black': {
        this.currentImageArray = (blackSneakers as any).default;
        this.color = color;
        this.loading = true;
        setTimeout(() => this.loading = false, 100)
        break;
      }
      case 'brown': {
        this.currentImageArray = (brownSneakers as any).default;
        this.color = color;
        this.loading = true;
        setTimeout(() => this.loading = false, 100)
        break;
      }
      case 'white': {
        this.currentImageArray = (whiteSneakers as any).default;
        this.color = color;
        this.loading = true;
        setTimeout(() => this.loading = false, 100)
        break;
      }
    }
  }
}
