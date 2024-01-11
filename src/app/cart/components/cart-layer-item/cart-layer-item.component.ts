import { Component, Input, OnInit } from '@angular/core';
import { CartService } from 'src/app/services/cart.service';

@Component({
  selector: 'app-cart-layer-item',
  templateUrl: './cart-layer-item.component.html',
  styleUrls: ['./cart-layer-item.component.scss'],
})
export class CartLayerItemComponent {
  constructor(public cartService: CartService) {}

  @Input() cartItem: any;
}
