import { Component, OnInit, Input } from '@angular/core';
import { ProductImage } from 'src/app/models/productImage';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.scss']
})
export class ProductDescriptionComponent implements OnInit {
  @Input() imageArray: ProductImage[];

  public zoomImage = false;
  public imageIndex = 0;
  public dataService: CartService;

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit(): void {}
}
