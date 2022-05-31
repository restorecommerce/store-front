import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/services/product.service';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  currency: string;
  selectedColor: string;

  responsiveImagesConfiguration = [
    { width: 400, min: 0, max: 1100.99, suffix: '-xl', format: 'webp' },
    { width: 400, min: 0, max: 1100.99, suffix: '-xl', format: 'jpeg' },
    { width: 190, min: 1101, max: 1156.99, suffix: '-sm', format: 'webp' },
    { width: 190, min: 1101, max: 1156.99, suffix: '-sm', format: 'jpeg' },
    { width: 260, min: 1157, max: 1268.99, suffix: '-md', format: 'webp' },
    { width: 260, min: 1157, max: 1268.99, suffix: '-md', format: 'jpeg' },
    { width: 330, min: 1269, max: 1381.99, suffix: '-lg', format: 'webp' },
    { width: 330, min: 1269, max: 1381.99, suffix: '-lg', format: 'jpeg' },
    { width: 400, min: 1382, max: 99999, suffix: '-xl', format: 'webp' },
    { width: 400, min: 1382, max: 99999, suffix: '-xl', format: 'jpeg' },
  ];

  constructor(private router: Router, private productService: ProductService) {}

  onProductClicked() {
    this.router.navigateByUrl(this.product.urls['self']);
  }

  ngOnInit(): void {
    this.selectedColor = this.product.selectedColor;
  }

  onMouseEnter($event: string) {
    this.onHoverColorPicker($event);
  }

  onMouseLeave($event: string) {
    this.onHoverColorPicker($event);
  }

  private onHoverColorPicker(colorHovered: string) {
    if (this.product.selectedColor === colorHovered) {
      return;
    }

    if (!this.product.colors.find((color) => color === colorHovered)) {
      this.selectedColor = this.product.selectedColor;
    } else {
      this.selectedColor = colorHovered;
    }
  }

  onLikeProduct() {
    this.product.like = !this.product.like;
  }
}
