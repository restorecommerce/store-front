import { Component, OnInit, Input } from '@angular/core';
import { IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';
import { Product } from 'src/app/models/product';

@Component({
  selector: 'app-product-main',
  templateUrl: './product-main.component.html',
  styleUrls: ['./product-main.component.scss'],
})
export class ProductMainComponent {
  @Input() product: IoRestorecommerceProductPhysicalVariant;

  public zoomImage = false;
  public imageIndex = 0;
}
