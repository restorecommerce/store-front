import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from 'src/app/models/product';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-recommend',
  templateUrl: './product-recommend.component.html',
  styleUrls: ['./product-recommend.component.scss'],
})
export class ProductRecommendComponent implements OnInit {
  @Input() imageArray: ProductImage[];
  public dataService: CartService;

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit() {}
}
