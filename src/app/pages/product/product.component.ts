import { Component, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})

export class ProductComponent implements OnInit {
  private dataService: CartService;

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit(): void {}

  public screenWidth() {
    return this.dataService.getScreenSize();
  }

  public desktopWidth() {
    return this.dataService.desktopSize();
  }

  public tabletWidth() {
    return this.dataService.tabletSize();
  }
}
