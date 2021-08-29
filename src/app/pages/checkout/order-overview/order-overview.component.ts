import { Component, OnInit } from '@angular/core';
import { IItem } from '@restorecommerce/cart/lib/model/IItem';
import { CartService } from 'src/app/services/cart.service';
import { TranslateService } from '@ngx-translate/core';
import { Money } from '@restorecommerce/cart/lib/model/primitives';

@Component({
  selector: 'app-order-overview',
  templateUrl: './order-overview.component.html',
  styleUrls: ['./order-overview.component.scss']
})
export class OrderOverviewComponent implements OnInit {

  private dataService: CartService;
  private translateService: TranslateService;

  constructor(private service: CartService, private secondService: TranslateService) {
    this.dataService = this.service;
    this.translateService = this.secondService;
  }

  ngOnInit(): void {
  }

  public getCartItems(): IItem[] {
    return this.dataService.getCartItems();
  }

  public getCartTotal(): number {
    return this.dataService.getCartItemTotal();
  }
  public getCartTotalGross(): string {
    return this.dataService.round(this.dataService.getCartTotalGross());
  }

  public getCartShipping(): Money {
    return this.dataService.getCartShipping();
  }

  public getTaxes(): string {
    return this.dataService.round(Number(this.getCartTotalGross()) - Number(this.getCartTotalNet()));
  }

  public getCartTotalNet(): string {
    return this.dataService.round(this.dataService.getCartTotalNet());
  }
}