import { Component, Input } from '@angular/core';
import { TemplateLayerRef } from '@vcl/ng-vcl';
import { CartService } from 'src/app/features/cart/services/cart.service';

@Component({
  selector: 'app-menu-layer-title',
  templateUrl: './menu-layer-title.component.html',
  styleUrls: ['./menu-layer-title.component.scss'],
})
export class MenuLayerTitleComponent {
  @Input() menuLayer: TemplateLayerRef;
  @Input() cartLayer: TemplateLayerRef;
  @Input() languageLayer: TemplateLayerRef;

  constructor(public cartService: CartService) {}
}
