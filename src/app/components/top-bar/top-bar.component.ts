import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';
import { Money } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss'],
})
export class TopBarComponent implements OnInit {
  public language: string = 'en';

  constructor(
    public cartService: CartService,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  public navigate(value: string): void {
    this.router.navigateByUrl(value);
  }

  // should be refactored to a screenDisplayConfigurationService
  public screenWidth(): number {
    return this.cartService.getScreenSize();
  }

  public desktopWidth(): number {
    return this.cartService.desktopSize();
  }
  // ===========================================================

  public getCartItems(): IItem[] {
    return this.cartService.getCartItems();
  }

  public getCartItemCount(): number {
    return this.cartService.getCartItemCount();
  }

  public getCartTotal(): number {
    return this.cartService.getCartItemTotal();
  }

  public getTaxes(): string {
    return this.cartService.round(
      Number(this.getCartTotalGross()) - Number(this.getCartTotalNet())
    );
  }

  public getCartTotalNet(): string {
    return this.cartService.round(this.cartService.getCartTotalNet());
  }

  public getCartTotalGross(): string {
    return this.cartService.round(this.cartService.getCartTotalGross());
  }

  public getCartShipping(): Money {
    return this.cartService.getCartShipping();
  }

  public removeCartItem(sku: string): void {
    this.cartService.removeCartItem(sku);
  }

  public setLanguage(): void {
    this.translateService.use(this.language);
  }
}
