import { Component, OnInit, Input } from '@angular/core';
import { Product, ProductImage } from 'src/app/models/product';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product-gallery',
  templateUrl: './product-gallery.component.html',
  styleUrls: ['./product-gallery.component.scss'],
})
export class ProductGalleryComponent implements OnInit {
  loading = false;
  zoomImage = false;
  productZoomContainerWidth: number;
  public galleryImages: ProductImage[];
  imageIndex = 0;

  @Input() product: Product;

  constructor(private productService: ProductService) {}

  ngOnInit(): void {
    this.loadImages();
  }

  loadImages() {
    this.loading = true;
    setTimeout(() => {
      const { productImageSources, selectedColor } = this.product;
      this.galleryImages = productImageSources[selectedColor];

      this.productService.productColorChanged.subscribe((color) => {
        this.galleryImages = this.product.productImageSources[color];
        console.log('Loaded Gallery');
        console.log(this.galleryImages);
        console.log('============');
      });
      this.loading = false;
    }, 100);
  }

  zoom(): void {
    this.zoomImage = true;
  }
}