import { Component, HostBinding, Input } from '@angular/core';
import { IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';

@Component({
  selector: 'app-product-variant-card',
  templateUrl: './product-variant-card.component.html',
  styleUrls: ['./product-variant-card.component.scss'],
})
export class ProductVariantCardComponent {
  @HostBinding('class') classes = 'column align-centered product';
  @Input() product!: IoRestorecommerceProductPhysicalVariant;

  currency = '€';

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
}
