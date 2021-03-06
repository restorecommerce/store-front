import { Component, OnInit, Input, AfterViewInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';


@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss']
})
export class ProductGalleryComponent implements OnInit, AfterViewInit {
  public loading = false;
  public zoomImage = false;
  public imageIndex = 0;
  public dataService: CartService;

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {}

  ngOnChanges() {
    this.loading = true;
    setTimeout(() => this.loading = false, 100)
  }

  public zoom(): void {
    this.zoomImage = true;
  }
}
