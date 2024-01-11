import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { CartService } from 'src/app/features/cart/services/cart.service';
import { ScreenService } from '../../services/screen.service';

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
    private displayService: ScreenService,
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

  public screenWidth(): number {
    return this.displayService.getScreenSize();
  }

  public desktopWidth(): number {
    return this.displayService.desktopSize();
  }

  public setLanguage(): void {
    this.translateService.use(this.language);
  }
}
