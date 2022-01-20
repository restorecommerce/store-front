import {
  Component,
  OnInit,
  Input,
  AfterViewInit,
  ViewChild,
  ElementRef,
  AfterViewChecked,
} from '@angular/core';
import { Product, ProductImage } from 'src/app/models/product';

import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnInit {
  public loading = false;
  public zoomImage = false;
  public imageIndex = 0;
  public dataService: CartService;
  public productZoomContainerWidth: number;

  @Input() product: Product;
  galleryImages: ProductImage[];

  constructor(private service: CartService) {
    this.dataService = this.service;
  }

  ngOnInit(): void {}

  ngOnChanges() {
    this.loading = true;
    setTimeout(() => {
      this.setCurrentImageArray();
      this.loading = false;
    }, 100);
  }

  public zoom(): void {
    this.zoomImage = true;
  }

  setCurrentImageArray() {
    const { productImageSources, selectedColor } = this.product;
    this.galleryImages = productImageSources[selectedColor];
    console.log(productImageSources[selectedColor]);
  }
}
