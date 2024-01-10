import { Component, OnInit } from '@angular/core';

import { ProductRecommendationService } from './product-recommend.service';

@Component({
  selector: 'app-product-recommend',
  templateUrl: './product-recommend.component.html',
  styleUrls: ['./product-recommend.component.scss'],
  providers: [ProductRecommendationService],
})
export class ProductRecommendComponent {
  constructor(public service: ProductRecommendationService) {}
}
