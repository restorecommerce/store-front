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

  cartClosed: boolean;
  cartItemCount: number;

  constructor(
    public cartService: CartService,
    private translateService: TranslateService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.cartService.cartItemCountUpdated.subscribe((cartCount) => {
      this.cartItemCount = cartCount;
    });
  }

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

  public setLanguage(): void {
    this.translateService.use(this.language);
  }
}
