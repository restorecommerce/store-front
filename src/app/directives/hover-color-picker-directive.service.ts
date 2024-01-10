import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import { ProductService } from '../features/products/services/product.service';

@Directive({
  selector: '[appHoverColorPicker]',
})
export class HoverColorPickerDirective {
  @Input() appHoverColorPicker = '';

  @HostListener('mouseenter')
  onMouseEnter() {
    this.highlight(this.appHoverColorPicker);
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.highlight('');
  }

  private highlight(value: string) {
    this.productService.productImageColorHover.next(value);
  }

  constructor(private el: ElementRef, private productService: ProductService) {}
}
