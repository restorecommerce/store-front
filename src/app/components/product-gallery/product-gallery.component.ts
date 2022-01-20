import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductImage } from 'src/app/models/product';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnInit {
  public loading = false;
  public zoomImage = false;
  public imageIndex = 0;
  public productZoomContainerWidth: number;

  @Input() product: Product;
  galleryImages: ProductImage[];

  constructor() {}

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
    //console.log(productImageSources[selectedColor]);
  }
}
