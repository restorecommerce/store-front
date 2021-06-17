import { Component, OnInit } from '@angular/core';
import { Decimal } from '@restorecommerce/cart/lib/model/primitives';
import { CartService } from 'src/app/services/cart.service';
import { NotificationService } from 'src/app/services/notification.service';

@Component({
  selector: 'app-product-info',
  templateUrl: './product-info.component.html',
  styleUrls: ['./product-info.component.scss']
})
export class ProductInfoComponent implements OnInit {

  public dataService: CartService;
  public notificationService: NotificationService;

  constructor(private service: CartService, private secondService: NotificationService) {
    this.dataService = this.service;
    this.notificationService = this.secondService;
  }

  ngOnInit(): void {}

  public getStyle(color: string, selected: boolean): string {
    if (selected) {
      return "";
    }
  }

  public addItemToCart() {
    this.dataService.addItemToCart([{
      sku: '50433323',
      desc: 'In Italien gefertigte Sneakers aus Leder mit Monogramm-Details',
      imgSrc: 'https://images.hugoboss.com/is/image/boss/hbeu50410989_001_250?$re_fullPageZoom$&qlt=85&wid=300&hei=200',
      price: new Decimal('250.00'), // Price
      taxType: 'vat_standard',
      weight: 610, // grams
      height: 4.20, // cm
      width: 27.5, // cm
      depth: 6.22, // cm
      quantity: 1,
    }]);
    this.notificationService.success();
  }
}
