import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../products/products.component';

@Component({
  selector: 'app-product-card',
  templateUrl: './product-card.component.html',
  styleUrls: ['./product-card.component.scss'],
})
export class ProductCardComponent implements OnInit {
  @Input() product: Product;

  currency: string;

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

  constructor() {}

  onChangeProductColor(color: string) {}

  onProductClicked() {
    // this.router.navigate(['products', payload]);
  }

  // onProductColorChanged(payload: { id: string | number; color: string }) {
  //   this.products = this.products.map((shoe) => {
  //     if (shoe.id === payload.id) {
  //       console.log('We want to change the color of the product!');
  //       shoe.selectedColor = payload.color;
  //     }
  //     return shoe;
  //   });

  //   // This is not optimal!
  // }

  ngOnInit(): void {}
}
