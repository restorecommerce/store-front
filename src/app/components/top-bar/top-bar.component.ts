import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';
import { Money } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.scss']
})
export class TopBarComponent implements OnInit {

  private dataService: CartService;
  private translateService: TranslateService;

  public language: string = "en";

  constructor(private service: CartService, private secondService: TranslateService, private router: Router) {
    this.dataService = this.service;
    this.translateService = this.secondService;
  }

  ngOnInit(): void {
  }

  public navigate(value: string): void {
    this.router.navigateByUrl(value);
  }

  public screenWidth(): number {
    return this.dataService.getScreenSize();
  }

  public desktopWidth(): number {
    return this.dataService.desktopSize();
  }

  public getCartItems(): IItem[] {
    return this.dataService.getCartItems();
  }

  public getCartItemCount(): number {
    return this.dataService.getCartItemCount();
  }

  public getCartTotal(): number {
    return this.dataService.getCartItemTotal();
  }

  public getTaxes(): string {
    return this.dataService.round(Number(this.getCartTotalGross()) - Number(this.getCartTotalNet()));
  }

  public getCartTotalNet(): string {
    return this.dataService.round(this.dataService.getCartTotalNet());
  }

  public getCartTotalGross(): string {
    return this.dataService.round(this.dataService.getCartTotalGross());
  }

  public getCartShipping(): Money {
    return this.dataService.getCartShipping();
  }

  public removeCartItem(sku: string): void {
    this.dataService.removeCartItem(sku);
  }

  public setLanguage(): void {
    this.translateService.use(this.language);
  }
}
