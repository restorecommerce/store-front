import { Component, Input } from '@angular/core';
import { IoRestorecommerceProductPhysicalVariant } from 'src/app/generated/graphql';
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
