import { Component, Inject, OnInit, PLATFORM_ID } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-product-interest',
  templateUrl: './product-interest.component.html',
  styleUrls: ['./product-interest.component.scss']
})
export class ProductInterestComponent implements OnInit {
  public switch = false;

  constructor(@Inject(PLATFORM_ID) private readonly platformId: any) {
  }

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      setInterval(() => this.changing(), 5000);
    }
  }

  private changing(): void {
    this.switch = !this.switch;
  }
}
