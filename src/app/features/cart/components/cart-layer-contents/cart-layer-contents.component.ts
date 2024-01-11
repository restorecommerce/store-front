import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { TemplateLayerRef } from '@vcl/ng-vcl';
import { CartService } from 'src/app/features/cart/services/cart.service';

@Component({
  selector: 'app-cart-layer-contents',
  templateUrl: './cart-layer-contents.component.html',
  styleUrls: ['./cart-layer-contents.component.scss'],
})
export class CartLayerContentsComponent {
  @Input() cartLayer: TemplateLayerRef;

  constructor(public cartService: CartService, public router: Router) {}
}
