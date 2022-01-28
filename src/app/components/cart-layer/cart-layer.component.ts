import { Component, OnInit, Input } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

import { Money } from '@restorecommerce/cart/lib/model/primitives';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart-layer',
  templateUrl: './cart-layer.component.html',
  styleUrls: ['./cart-layer.component.scss'],
})
export class CartLayerComponent implements OnInit {
  @Input() open: boolean;

  constructor(private cartService: CartService, private router: Router) {}

  ngOnInit(): void {}

  navigate(value: string): void {
    this.router.navigateByUrl(value);
  }

  getCartItems(): IItem[] {
    return this.cartService.getCartItems();
  }

  getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  getCartTotal(): number {
    return this.cartService.getCartItemTotal();
  }

  getTaxes(): string {
    return this.cartService.round(
      Number(this.getCartTotalGross()) - Number(this.getCartTotalNet())
    );
  }

  getCartTotalNet(): string {
    return this.cartService.round(this.cartService.getCartTotalNet());
  }

  getCartTotalGross(): string {
    return this.cartService.round(this.cartService.getCartTotalGross());
  }

  getCartShipping(): Money {
    return this.cartService.getCartShipping();
  }

  removeCartItem(sku: string): void {
    this.cartService.removeCartItem(sku);
  }
}
